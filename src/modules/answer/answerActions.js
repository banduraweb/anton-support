import createRequestRoutine from '../../helpers/createRequestRoutine';
import createTriggerRoutine from '../../helpers/createTriggerRoutine';

const prefix = 'user-results';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushAnswer = createRequestBound('ANSWER_PUSH');
export const clearAll = createTriggerBound('CLEAR_ALL');
