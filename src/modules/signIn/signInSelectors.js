const selectStatus = (state) => state.login.status;
const selectInputFields = (state) => state.login.input;
const selectErrors = (state) => state.login.errors;
const selectLoginState = (state) => state.login;

export const signInSelectors = {
  selectStatus,
  selectInputFields,
  selectErrors,
  selectLoginState,
};
