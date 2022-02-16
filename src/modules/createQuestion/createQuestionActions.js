import createRequestRoutine from '../../helpers/createRequestRoutine';
import createTriggerRoutine from '../../helpers/createTriggerRoutine';

const prefix = 'createQuestion';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushCreateQuestion = createRequestBound('CREATE_QUESTION_PUSH');
export const saveCreateQuestionField = createTriggerBound('CREATE_QUESTION_FIELD_SAVE');
export const clearAll = createTriggerBound('CLEAR_ALL');
