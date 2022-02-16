import createRequestRoutine from '../../helpers/createRequestRoutine';
import createTriggerRoutine from '../../helpers/createTriggerRoutine';

const prefix = 'signIn';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushSignIn = createRequestBound('SIGNIN_PUSH');
export const saveSignInField = createTriggerBound('SIGNIN_FIELD_SAVE');

export const pushLogout = createRequestBound('LOGOUT_PUSH');

export const clearAll = createTriggerBound('CLEAR_ALL');
export const clearAllErrors = createTriggerBound('CLEAR_ALL_ERRORS');
export const clearCurrentError = createTriggerBound('CLEAR_CURRENT_ERROR');
