import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpSelectors } from '../modules/signUp/signUpSelectors';
import { REQUEST, SUCCESS, CREATE_USER, CREATE_QUESTION } from '../constants/constants';
import { AdminPanel } from './AdminPanel';
import { pushSignUp, saveSignUpField } from '../modules/signUp/signUpActions';
import { pushCreateQuestion, saveCreateQuestionField } from '../modules/createQuestion/createQuestionActions';
import { FormControlUnstyledContext } from '@mui/base';
import {createQuestionSelectors} from '../modules/createQuestion/createQuestionSelectors'
export const AdminPanelContainer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [currentModal, setCurrentModal] = React.useState(CREATE_USER);

  const handleOpenCreateUser = () => {
    setOpen(true);   
    setCurrentModal(CREATE_USER)
    console.log(currentModal, 'userbutton')
  }
  const handleOpenCreateQuestion = () => {
    setOpen(true);   
     setCurrentModal(CREATE_QUESTION)
     console.log(currentModal, 'questionbutton')

  }
  const handleClose = () => setOpen(false);
  const { input, status } = useSelector(signUpSelectors.selectUserState);
  const { inputQuestion, status: questionStatus  } = useSelector(createQuestionSelectors.selectCreateQuestionState);

  useEffect(() => {
    if (status === SUCCESS) {
      setOpen(false)
    }
  }, [status])
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if(currentModal === CREATE_USER){
        dispatch(pushSignUp(input));
      }else{
        dispatch(pushCreateQuestion(inputQuestion));
      }
    },
    [dispatch,currentModal, input, inputQuestion]
  );

  const handleChange = useCallback(
    ({ target }) => {
       console.log(target, 'tager')
      if(currentModal === CREATE_USER){
        dispatch(saveSignUpField(target));
      }else{
        dispatch(saveCreateQuestionField(target));
      }
    },
    [currentModal]
  );

  //   const loading = status === REQUEST;
  return (
    <AdminPanel
      handleOpenCreateUser={handleOpenCreateUser}
      openModal={open}
      handleClose={handleClose}
      input={input}
      inputQuestion={inputQuestion}
      handleSubmit={handleSubmit}
      //   errors={errors}
      //   input={input}
      //   handleSubmit={handleSubmit}
      //   loading={loading}
      handleChange={handleChange}
      currentModal={currentModal}

      handleOpenCreateQuestion={handleOpenCreateQuestion}
    />
  );
};
