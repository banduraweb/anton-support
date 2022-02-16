import { all, call, put, takeLatest } from 'redux-saga/effects';
import AnswerService from '../../services/answer.service';
import Notification from '../../services/notification.service';
import { pushAnswer } from './answerActions';

function* answerWorker({ payload }) {
  try {
    yield put(pushAnswer.request());
    console.log('answer', payload);
    yield call(AnswerService.answer, payload);
    yield put(pushAnswer.success());
  } catch (e) {
    Notification.error(e.response?.data?.error);
    yield put(pushAnswer.failure());
  }
}

export function* answerWatcher() {
  yield all([takeLatest(pushAnswer.TRIGGER, answerWorker)]);
}
