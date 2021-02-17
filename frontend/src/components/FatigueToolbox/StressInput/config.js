import { useContext } from 'react';
import { FatigueContextDispatch } from '../context';

const initialExcelData = [[-50, 50, 200000], [-40, 80, 100000], [0, 100, 400000], [-50, 80, 200000], [-20, 90, 400000]];
const EXCEL_LIMIT = 10;
export const EXCEL_COLUMN_WIDTH = 180;

export const handleExcelOptions = () => {
  const fatigueContextDispatch = useContext(FatigueContextDispatch);

  const jexcelConfig = {
    data: initialExcelData,
    minDimensions: [initialExcelData[0].length, initialExcelData.length],
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
    tableHeight: '300px',
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
