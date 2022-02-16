import { all, fork } from 'redux-saga/effects';
import { loginWatcher } from './modules/signIn/signInWorkers';
import { createUserWatcher } from './modules/signUp/signUpWorkers';
import { questionWatcher } from './modules/question/questionWorkers';
import { answerWatcher } from './modules/answer/answerWorkers';
import { createQuestionWatcher } from './modules/createQuestion/createQuestionWorkers';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(questionWatcher),
    fork(answerWatcher),
    fork(createUserWatcher),
    fork(createQuestionWatcher),
  ]);
}
