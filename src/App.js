import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { QuizeContainer } from './pages/QuizeContainer';
import { GreetingContainer } from './pages/GreetingContainer';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { AdmineRoute } from './components/AdmineRoute/AdmineRoute';
import { PublicRoute } from './components/PublicRoure/PublicRoute';
import { AuthContainer } from './pages/AuthContainer';
import { AdminPanelContainer } from './pages/AdminPanelContainer';

import Result from './pages/Result';
const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <AuthContainer />
            </PublicRoute>
          }
        />
        <Route
          path="/greeting"
          element={
            <PrivateRoute>
              <GreetingContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/quize"
          element={
            <PrivateRoute>
              <QuizeContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/result"
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-panel"
          element={
            <AdmineRoute>
              <AdminPanelContainer />
            </AdmineRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
