import { createRoutine } from 'redux-saga-routines';

export default (prefix = '', name) =>
  createRoutine(`${prefix ? `${prefix}/` : ''}${name}`);
