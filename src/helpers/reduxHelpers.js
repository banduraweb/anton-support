import { handleActions } from 'redux-actions';
import { FAILURE, NONE, REQUEST, SUCCESS } from '../constants/constants';

export function makeStatusReducer(action) {
  return handleActions(
    {
      [action.REQUEST]() {
        return REQUEST;
      },
      [action.SUCCESS]() {
        return SUCCESS;
      },
      [action.FAILURE]() {
        return FAILURE;
      },
      [action.FULFILL]() {
        return NONE;
      },
    },
    NONE
  );
}

export function makeStatusWithResetReducer(action, resetAction) {
  return handleActions(
    {
      [action.REQUEST]() {
        return REQUEST;
      },
      [action.SUCCESS]() {
        return SUCCESS;
      },
      [action.FAILURE]() {
        return FAILURE;
      },
      [action.FULFILL]() {
        return NONE;
      },
      [resetAction.TRIGGER]() {
        return NONE;
      },
    },
    NONE
  );
}
