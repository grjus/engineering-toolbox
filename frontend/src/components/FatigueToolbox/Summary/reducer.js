export const initialState = {
  isRunning: false,
  errorMessage: '',
};

export const actionType = {
  SUBMIT: 'SUBMIT',
  SUCCESS: 'SUCESS',
  FAIL: 'FAIL',
};

export const dataSubmitReducer = (state, action) => {
  switch (action.type) {
    case actionType.SUBMIT:
      return {
        isRunning: true,
        errorMessage: [],
      };
    case actionType.SUCCESS:
      return {
        isRunning: false,
        errorMessage: [],
      };
    case actionType.FAIL:
      return {
        isRunning: false,
        errorMessage: [...state.errorMessage, action.payload],
      };

    default:
      return state;
  }
};
