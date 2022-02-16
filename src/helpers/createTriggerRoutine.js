import { createRoutineCreator } from 'redux-saga-routines';

const createTriggerRoutine = createRoutineCreator(['TRIGGER']);

export default (prefix = '', name) =>
  createTriggerRoutine(`${prefix ? `${prefix}/` : ''}${name}`);
