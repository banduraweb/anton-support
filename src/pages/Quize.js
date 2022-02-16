import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Chip, Avatar } from '@mui/material';
import cx from 'classnames/bind';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Alert from '@mui/material/Alert';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  quizeWrapper: {
    height: '90vh',
  },
  alert: {
    fontSize: '20px',
  },
  chip: {
    padding: '15px',
    textAlign: 'left',
    justifyContent: 'start',
  },
  label: {
    whiteSpace: 'wrap',
  },
  root: {
    verticalAlign: 'left',
    backgroundColor: alpha(theme.palette.primary.light, 0.5),
    '&&:hover': {
      backgroundColor: theme.palette.success.light,
    },
    '& $avatar': {
      marginLeft: 5,
      marginRight: -6,
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
      width: 40,
      height: 40,
    },
    '& .MuiChip-label': {
      whiteSpace: 'normal',
      fontSize: '16px',
    },
  },

  avatar: {
    width: 40,
    height: 40,
  },
  header: {
    marginBottom: '60px',
  },
}));

export const Quize = ({
  questionList,
  currentQuestionIndex,
  handleAnswerSubmit,
}) => {
  const classes = useStyles();
  const avatarMap = ['A', 'B', 'C', 'D'];
  return (
    <Grid
      Grid
      container
      spacing={2}
      className={classes.quizeWrapper}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        className={classes.questionWrapper}
      >
        <Grid item justifySelf="center">
          <Alert
            className={classes.alert}
            icon={<QuestionMarkIcon fontSize="inherit" />}
            severity="success"
          >
            {!!questionList.length &&
              questionList[currentQuestionIndex].content}
          </Alert>
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {!!questionList.length &&
          questionList[currentQuestionIndex].variants.map((item, i) => (
            <Grid
              container
              item
              xs={12}
              sm={12}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Chip
                  sx={{ width: '80vw', height: 'auto' }}
                  onClick={() =>
                    handleAnswerSubmit(item.id, currentQuestionIndex)
                  }
                  clickable
                  classes={{
                    root: classes.root,
                    avatar: classes.avatar,
                    clickable: classes.clickable,
                    lable: classes.lable,
                  }}
                  className={cx(classes.chip)}
                  label={item.variant}
                  variant="outlined"
                  avatar={<Avatar>{avatarMap[i]}</Avatar>}
                />
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
