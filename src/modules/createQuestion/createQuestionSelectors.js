const selectStatus = (state) => state.createQuestion.status;
const selectInputFields = (state) => state.createQuestion.input;
// const selectErrors = (state) => state.login.errors;
const selectCreateQuestionState = (state) => state.createQuestion;

export const createQuestionSelectors = {
  selectStatus,
  selectInputFields,
  // selectErrors,
  selectCreateQuestionState,
};
