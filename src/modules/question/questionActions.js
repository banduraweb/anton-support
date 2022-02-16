import createRequestRoutine from '../../helpers/createRequestRoutine';
import createTriggerRoutine from '../../helpers/createTriggerRoutine';

const prefix = 'question';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushQuestion = createRequestBound('QUESTION_PUSH');
export const saveQuestion = createTriggerBound('QUESTION_SAVE');
export const clearAll = createTriggerBound('CLEAR_ALL');
