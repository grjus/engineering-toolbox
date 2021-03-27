import { useContext } from 'react';
import { FatigueContextDispatch, FatigueContext } from '../context';

const EXCEL_LIMIT = 50;
export const EXCEL_COLUMN_WIDTH = 180;

export const HandleExcelOptions = () => {
  const fatigueContextDispatch = useContext(FatigueContextDispatch);
  const fatigueState = useContext(FatigueContext);
  const { excelData } = fatigueState;

  const jexcelConfig = {
    data: excelData,
    minDimensions: [excelData[0].length, excelData.length],
    csvFileName: 'StressInput',
    columns: [{
      title: ' ',
      width: EXCEL_COLUMN_WIDTH,
      decimal: '.',
      type: 'numeric',
      mask: '[-]#.000',
    }, {
      title: ' ',
      width: EXCEL_COLUMN_WIDTH,
      decimal: '.',
      type: 'numeric',
      mask: '[-]#.000',
    }, {
      title: ' ',
      width: EXCEL_COLUMN_WIDTH,
      decimal: '.',
      type: 'numeric',
      mask: '[-]#',
    }],
    columnDrag: true,
    allowInsertColumn: false,
    editable: true,
    allowDeleteColumn: false,
    allowRenameColumn: false,
    tableOverflow: true,
    tableHeight: '200px',
    show: true,

    onload(instance) {
      instance.jexcel.hideIndex();
    },
    oninsertrow(instance) {
      const numOfRows = instance.jexcel.getColumnData([0]).length;
      if (numOfRows > EXCEL_LIMIT) {
        instance.jexcel.deleteRow([EXCEL_LIMIT]);
        fatigueContextDispatch((prev) => ({
          ...prev, excelError: `Number of rows is limited to ${EXCEL_LIMIT}`,
        }));
      }
    },
    onfocus(instance) {
      if (instance.jexcel.getColumnData([0]).length <= EXCEL_LIMIT) {
        fatigueContextDispatch((prev) => ({
          ...prev, excelError: '',
        }));
      }
    },
  };

  return jexcelConfig;
};

export const tableHeaders = [
  {
    label: 'Minimum Stress',
    key: 'head-min-stress',
  },
  {
    label: 'Maximum Stress',
    key: 'head-max-stress',
  },
  {
    label: 'Required Cycles',
    key: 'head-req-cycles',
  },
];
