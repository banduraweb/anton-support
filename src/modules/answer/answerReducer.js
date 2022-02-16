import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './answerActions';
import { makeStatusWithResetReducer } from '../../helpers/reduxHelpers';

export const answer = combineReducers({
  status: makeStatusWithResetReducer(actions.pushAnswer, actions.clearAll),
});
