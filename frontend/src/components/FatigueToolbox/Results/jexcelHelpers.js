const dangerStyle = `
text-align:center;
color:crimson!important;
font-weight:bold
`;
const sucessStyle = `
text-align:center;
color:#12a112!important;
font-weight:bold
`;

export const formatJExcelTable = (instance, dataset) => {
  const range = dataset.length;
  for (let i = 0; i < range; i++) {
    const value = instance.getValueFromCoords([6], [i]);
    const cell = instance.getCellFromCoords([6], [i]);
    if (value >= 1) {
      cell.setAttribute('style', dangerStyle);
    } else {
      cell.setAttribute('style', sucessStyle);
    }
  }
};
