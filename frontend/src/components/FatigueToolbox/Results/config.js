export const EXCEL_COLUMN_WIDTH = 130;
const NO_OF_COLUMNS = 7;

export const jexcelConfig = {
//   data: [Array(NO_OF_COLUMNS)],
  data: [[-20, 90, 55, 35, 71.739, 167189.5, 2.392]],
  minDimensions: [NO_OF_COLUMNS, 4],
  csvFileName: 'StressOutput',
  columns: Array(NO_OF_COLUMNS).fill(0).map(() => ({
    title: ' ',
    width: EXCEL_COLUMN_WIDTH,
    decimal: '.',
    type: 'numeric',
    mask: '[-]#.000',
  })),
  columnDrag: false,
  allowInsertColumn: false,
  allowInsertRow: false,
  editable: false,
  allowDeleteColumn: false,
  allowRenameColumn: false,
  tableOverflow: true,
  tableHeight: '200px',
  show: true,
  onload(instance) {
    instance.jexcel.hideIndex();
  },
};

export const tableHeaders = [
  {
    label: 'Min Stress',
    key: 'res-min-stress',
  },
  {
    label: 'Max Stress',
    key: 'res-max-stress',
  },
  {
    label: 'Alternating Stress',
    key: 'res-alt-stress',
  },
  {
    label: 'Mean Stress',
    key: 'res-mean-stress',
  },

  {
    label: 'Fatigue Stress',
    key: 'res-fat-stress',
  },
  {
    label: 'Allowable cycles',
    key: 'res-allow-cycles',
  },
  {
    label: 'Fatigue damage',
    key: 'res-fatigue-damage',
  },
];

export const chartOptions = {
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Fatigue curve - Baskin relation',
      fontColor: 'green',
      fontSize: 12,

    },
    scales: {
      xAxes: [{
        display: true,
        type: 'logarithmic',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Cycle count',
          fontSize: 12,
          fontColor: 'black',
        },
        ticks: {
          max: 10000000,
          fontSize: 12,
          fontColor: 'black',
        },

      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Stress',
          fontSize: 12,
          fontColor: 'black',
        },
        ticks: {
          min: 0,
          // stepSize: 10,
          fontSize: 12,
          fontColor: 'black',
        },
      }],
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      fontSize: 12,
      fontColor: 'black',

    },
  },
};
