import React from 'react';
import { useSelector } from 'react-redux';
import { Greeting } from './Greeting';
import routing from '../routing/routing';
import { useNavigate } from 'react-router-dom';

export const GreetingContainer = () => {
  const history = useNavigate();

  const redirectTOQuize = () => {
    history(routing().quize);
  };

  return <Greeting redirectToQuize={redirectTOQuize} />;
};
