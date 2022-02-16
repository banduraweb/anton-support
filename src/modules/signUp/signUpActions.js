import createRequestRoutine from '../../helpers/createRequestRoutine';
import createTriggerRoutine from '../../helpers/createTriggerRoutine';

const prefix = 'signUp';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushSignUp = createRequestBound('SIGNUP_PUSH');
export const saveSignUpField = createTriggerBound('SIGNUP_FIELD_SAVE');
export const clearAll = createTriggerBound('CLEAR_ALL');
