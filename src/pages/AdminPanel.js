import * as React from 'react';
import { REQUEST, SUCCESS, CREATE_USER } from '../constants/constants';

import { MuiModal } from '../components/Modal';
import { UserForm } from '../components/UserForm';
import { QuestionForm } from '../components/QuestionForm';
import Button from '@mui/material/Button';

export const AdminPanel = ({
  handleOpenCreateUser,
  handleOpenCreateQuestion,
  openModal,
  handleClose,
  input,
  inputQuestion,
  handleSubmit,
  handleChange,
  currentModal
}) => {

  return (
    <div className="admin-panel">
      <Button variant="contained" onClick={handleOpenCreateUser}>
        Create user
      </Button>
      <Button variant="contained" className='questionCreateButton' onClick={handleOpenCreateQuestion}>
        Create question
      </Button>
      <MuiModal
        open={openModal}
        handleClose={handleClose}
      >
        {currentModal === CREATE_USER ?
          <UserForm
            input={input}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          /> :
          <QuestionForm 
          inputQuestion={inputQuestion}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          />
        }
      </MuiModal>
    </div>
  );
};
