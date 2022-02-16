const selectStatus = (state) => state.createUser.status;
const selectInputFields = (state) => state.createUser.input;
// const selectErrors = (state) => state.login.errors;
const selectUserState = (state) => state.createUser;

export const signUpSelectors = {
  selectStatus,
  selectInputFields,
  // selectErrors,
  selectUserState,
};
