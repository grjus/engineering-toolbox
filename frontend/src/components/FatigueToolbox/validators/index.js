// Jexcel dataTable validation

export const dataTableValidation = (spreadsheet, refValue) => {
  const minStress = spreadsheet.getColumnData([0]);
  const maxStress = spreadsheet.getColumnData([1]);
  const requiredCycles = spreadsheet.getColumnData([2]);

  const parsedValue = (number) => {
    const parsedNumber = number.toString().trim();
    if (parsedNumber.length === 0 || Number.isNaN.parsedNumber) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < minStress.length; i++) {
    if (parsedValue(minStress[i]) || parsedValue(maxStress[i]) || parsedValue(requiredCycles[i])) {
      return 'Error: Please remove empty cells';
    }
    if (minStress[i] >= maxStress[i]) {
      return 'Error:Minimum stresses is greater than maximum stress';
    }
    if (maxStress[i] > parseFloat(refValue)) {
      return 'Error:Maximum stresses is greater than material ultimate strength';
    }
    if (requiredCycles[i] < 1000) {
      return 'Error: Minimum cycle count should be greater than 1000';
    }
  }
  return false;
};

const MIN_YIELD_STRENGTH = 10;
const MAX_YIELD_STRENGTH = 2000;
const MIN_ULT_STRENGTH = 10;
const MAX_ULT_STRENGTH = 2000;
const MIN_DERATING_FACTOR = 5E-2;
const MAX_DERATING_FACTOR = 10;

export const ultStrValRules = {
  required: { value: true, message: 'Value is required' },
  min: { value: MIN_ULT_STRENGTH, message: `Value less than ${MIN_ULT_STRENGTH}` },
  max: { value: MAX_ULT_STRENGTH, message: `Value greater than ${MAX_ULT_STRENGTH}` },
};
export const yieldStrValRules = {
  required: { value: true, message: 'Value is required' },
  min: { value: MIN_YIELD_STRENGTH, message: `Value less than ${MIN_YIELD_STRENGTH}` },
  max: { value: MAX_YIELD_STRENGTH, message: `Value greater than ${MAX_YIELD_STRENGTH}` },
};
export const userFacValRules = {
  required: { value: true, message: 'Value is required' },
  min: { value: MIN_DERATING_FACTOR, message: `Value less than ${MIN_DERATING_FACTOR}` },
  max: { value: MAX_DERATING_FACTOR, message: `Value greater than ${MAX_DERATING_FACTOR}` },
};