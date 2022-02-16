import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from './Auth';
import routing from '../routing/routing';
import { useNavigate } from 'react-router-dom';
import { signInSelectors } from '../modules/signIn/signInSelectors';
import { REQUEST, SUCCESS } from '../constants/constants';
import {
  clearAllErrors,
  pushSignIn,
  saveSignInField,
} from '../modules/signIn/signInActions';

export const AuthContainer = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { errors, input, status } = useSelector(
    signInSelectors.selectLoginState
  );

  useEffect(() => {
    if (status === SUCCESS) {
      history(routing().greeting);
    }
  }, [status]);

  useEffect(() => {
    dispatch(clearAllErrors());
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(pushSignIn(input));
    },
    [dispatch, input]
  );
  const handleChange = useCallback(
    ({ target }) => {
      dispatch(saveSignInField(target));
    },
    [dispatch]
  );

  const loading = status === REQUEST;
  return (
    <Auth
      errors={errors}
      input={input}
      handleSubmit={handleSubmit}
      loading={loading}
      handleChange={handleChange}
    />
  );
};
