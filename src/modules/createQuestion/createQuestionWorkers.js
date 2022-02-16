import {
  all,
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {QuestionService} from '../../services/question.service';
import Notification from '../../services/notification.service';
import { createQuestionSelectors } from './createQuestionSelectors';
import {  
  pushCreateQuestion,
  clearAll,
} from './createQuestionActions';
 import Validation from '../../services/validation.service';


function* createQuestionWorker() {
  try {
    yield put(pushCreateQuestion.request());
    const { inputQuestion } = yield select(createQuestionSelectors.selectCreateQuestionState);
    yield call(QuestionService.createQuestion, inputQuestion)
    yield put(pushCreateQuestion.success());
    yield put(clearAll());
   
  } catch (e) {
    console.log(e, 'errror')
    Notification.error(e.response?.data?.error);
    yield put(pushCreateQuestion.failure());
  }
}

export function* createQuestionWatcher() {
  yield all([
    takeLatest(pushCreateQuestion.TRIGGER, createQuestionWorker),
    // takeLatest(pushLogout, logoutWorker),ss
    // takeEvery(clearAll.TRIGGER, createUserWorker),
  ]);
}
