import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './signInActions';
import { makeStatusWithResetReducer } from '../../helpers/reduxHelpers';

const signInInitial = {
  userName: '',
  password: '',
};

const signInInput = handleActions(
  {
    [actions.saveSignInField.TRIGGER](state, { payload }) {
      return { ...state, [payload.name]: payload.value };
    },
    [actions.clearAllErrors.TRIGGER]() {
      return signInInitial;
    },
    [actions.clearAll.TRIGGER]() {
      return signInInitial;
    },
  },
  signInInitial
);

const signInErrors = handleActions(
  {
    [actions.pushSignIn.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearCurrentError.TRIGGER](state, { payload }) {
      return { ...state, [payload.name]: null };
    },
    [actions.clearAllErrors.TRIGGER]() {
      return {};
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    },
  },
  {}
);

export const login = combineReducers({
  status: makeStatusWithResetReducer(actions.pushSignIn, actions.clearAll),
  input: signInInput,
  errors: signInErrors,
});
