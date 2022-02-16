import React from 'react';
import { Navigate } from 'react-router-dom';
import { loggedIn } from '../../helpers/tokenChecker';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = loggedIn();
  return isLoggedIn ? children : <Navigate to="/" />;
};
