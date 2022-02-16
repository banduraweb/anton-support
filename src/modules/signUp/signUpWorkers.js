import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { UserService } from '../../services/user.service';
import Notification from '../../services/notification.service';
import { signUpSelectors } from './signUpSelectors';
import { pushSignUp, clearAll } from './signUpActions';
// import Validation from '../../services/validation.service';

function* createUserWorker() {
  try {
    yield put(pushSignUp.request());
    const { input } = yield select(signUpSelectors.selectUserState);
    yield call(UserService.createUser, input);
    yield put(pushSignUp.success());
    yield put(clearAll());
  } catch (e) {
    console.log(e, 'errror');
    Notification.error(e.response?.data?.error);
    yield put(pushSignUp.failure());
  }
}

export function* createUserWatcher() {
  yield all([
    takeLatest(pushSignUp.TRIGGER, createUserWorker),
    // takeLatest(pushLogout, logoutWorker),ss
    // takeEvery(clearAll.TRIGGER, createUserWorker),
  ]);
}
