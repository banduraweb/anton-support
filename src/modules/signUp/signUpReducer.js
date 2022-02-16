import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './signUpActions';
import { makeStatusWithResetReducer } from '../../helpers/reduxHelpers';

const signUpInitial = {
  userName: '',
  password: '',
  role: 'USER',
};

const signUpInput = handleActions(
  {
    [actions.saveSignUpField.TRIGGER](state, { payload }) {
      return { ...state, [payload.name]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return signUpInitial;
    },
  },
  signUpInitial
);

// const signInErrors = handleActions(
//   {
//     [actions.pushSignIn.FAILURE](state, { payload }) {
//       return payload;
//     },
//     [actions.clearCurrentError.TRIGGER](state, { payload }) {
//       return { ...state, [payload.name]: null };
//     },
//     [actions.clearAllErrors.TRIGGER]() {
//       return {};
//     },
//     [actions.clearAll.TRIGGER]() {
//       return {};
//     },
//   },
//   {}
// );

export const createUser = combineReducers({
  status: makeStatusWithResetReducer(actions.pushSignUp, actions.clearAll),
  input: signUpInput,
  // errors: signInErrors,
});
