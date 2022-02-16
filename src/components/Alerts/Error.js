import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '282px',
    padding: theme.spacing(1),
    wordBreak: 'break-word',
  },
}));

export const Error = ({ message }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>{message}</div>
    </div>
  );
};
