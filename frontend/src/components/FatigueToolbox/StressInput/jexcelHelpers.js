export const addRow = (spreadsheet) => {
  if (spreadsheet) {
    spreadsheet.insertRow();
  }
};

export const deleteRow = (spreadsheet) => {
  if (spreadsheet) {
    spreadsheet.deleteRow();
  }
};

export const saveSpreadsheet = (spreadsheet) => {
  if (spreadsheet) {
    spreadsheet.download();
  }
};
