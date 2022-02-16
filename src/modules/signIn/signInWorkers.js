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
import { signInSelectors } from './signInSelectors';
import {
  pushLogout,
  pushSignIn,
  clearAllErrors,
  clearAll,
} from './signInActions';
import { saveToken } from '../../helpers/tokenChecker';
import Validation from '../../services/validation.service';

function* logoutWorker() {
  try {
    localStorage.removeItem('token');
    window.location.href = '/';
  } catch (e) {
    console.log(e);
  }
}

function* loginWorker() {
  try {
    yield put(pushSignIn.request());

    const { input } = yield select(signInSelectors.selectLoginState);

    const { isValid, errors } = Validation.loginValidation(input);

    if (isValid) {
      const { token } = yield call(UserService.login, input);
      if (token) {
        yield saveToken(token);
      }
      yield put(pushSignIn.success());
      yield put(clearAllErrors());
      yield put(clearAll());
    } else {
      yield put(pushSignIn.failure(errors));
    }
  } catch (e) {
    Notification.error(e.response?.data?.error);
    yield put(pushSignIn.failure());
  }
}

export function* loginWatcher() {
  yield all([
    takeLatest(pushSignIn.TRIGGER, loginWorker),
    takeLatest(pushLogout, logoutWorker),
    takeEvery(clearAll.TRIGGER, loginWorker),
  ]);
}
