import React from 'react';
import { Navigate } from 'react-router-dom';
import { loggedIn } from '../../helpers/tokenChecker';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = loggedIn();
  return isLoggedIn ? <Navigate to="/greeting" /> : children;
};
