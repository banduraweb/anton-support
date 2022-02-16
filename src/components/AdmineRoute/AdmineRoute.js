import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAdmin } from '../../helpers/tokenChecker';

export const AdmineRoute = ({ children }) => {
  const isLoggedInAdmin = isAdmin();
  return isLoggedInAdmin ? children : <Navigate to="/" />;
};
