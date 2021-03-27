export const validationRules = (minParam, maxParam) => ({
  required: {
    value: true,
    message: 'Value is required',
  },
  min: {
    value: parseFloat(minParam),
    message: `Value should be greater than ${minParam}`,

  },
  max: {
    value: parseFloat(maxParam),
    message: `Value should be less than ${maxParam}`,
  },
});
