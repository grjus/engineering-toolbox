const MIN_RO = 10;
const MAX_RO = 35;

export const roValRules = {
  required: { value: true, message: 'Value is required' },
  min: { value: MIN_RO, message: `Value less than ${MIN_RO}` },
  max: { value: MAX_RO, message: `Value greater than ${MAX_RO}` },
};

export const minLinearStress = {
  required: { value: true, message: 'Value is required' },
};
// export const yieldStrValRules = {
//   required: { value: true, message: 'Value is required' },
//   min: { value: MIN_YIELD_STRENGTH, message: `Value less than ${MIN_YIELD_STRENGTH}` },
//   max: { value: MAX_YIELD_STRENGTH, message: `Value greater than ${MAX_YIELD_STRENGTH}` },
// };
// export const userFacValRules = {
//   required: { value: true, message: 'Value is required' },
//   min: { value: MIN_DERATING_FACTOR, message: `Value less than ${MIN_DERATING_FACTOR}` },
//   max: { value: MAX_DERATING_FACTOR, message: `Value greater than ${MAX_DERATING_FACTOR}` },
// };
