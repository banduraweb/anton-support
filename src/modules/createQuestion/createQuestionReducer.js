import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './createQuestionActions';
import { makeStatusWithResetReducer } from '../../helpers/reduxHelpers';

const createQuestionInitial = {
  content: '',
  variants: [
    {
      id: '0',
      variant: '', 
      isCorrect: false,
    },
    {
      id: '1',
      variant: '', 
      isCorrect: false,
    },
    {
      id: '2',
      variant: '', 
      isCorrect: false,
    },
    {
      id: '3',
      variant: '', 
      isCorrect: true,
    }
  ],
};

const createQuestionInput = handleActions(
  {
    [actions.saveCreateQuestionField.TRIGGER](state, { payload }) {
      if(['0', '1', '2', '3'].includes(payload.id)){        
        return  {...state, variants:state.variants.map((variant)=>{
          if(variant.id === payload.id && payload.type !=='checkbox'){
            return {...variant, variant:payload.value}
          }else if(['0', '1', '2', '3'].includes(payload.id) && payload.type ==='checkbox') {
            if(variant.id === payload.id) {
              console.log('nepopadem')
              return {...variant, isCorrect:!variant.isCorrect}
            }else{
              return {...variant, isCorrect:false}
            }

          }else{
            return variant
          }
        })}
      }else {
        return { ...state, [payload.name]: payload.value };
      }
     
    },
    [actions.clearAll.TRIGGER]() {
      return createQuestionInitial;
    },
  },
  createQuestionInitial
);

// const signInErrors = handleActions(
//   {
//     [actions.pushSignIn.FAILURE](state, { payload }) {
//       return payload;
//     },
//     [actions.clearCurrentError.TRIGGER](state, { payload }) {
//       return { ...state, [payload.name]: null };
//     },
//     [actions.clearAllErrors.TRIGGER]() {
//       return {};
//     },
//     [actions.clearAll.TRIGGER]() {
//       return {};
//     },
//   },
//   {}
// );

export const createQuestion = combineReducers({
  status: makeStatusWithResetReducer(actions.pushCreateQuestion, actions.clearAll),
  inputQuestion: createQuestionInput,
  // errors: signInErrors,
});
