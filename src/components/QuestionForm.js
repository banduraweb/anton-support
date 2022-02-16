import React from 'react';
import TextField from '@mui/material/TextField/index';
import Card from '@mui/material/Card/index';
import CardContent from '@mui/material/CardContent/index';
import Button from '@mui/material/Button/index';
import Grid from '@mui/material/Grid/index';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles/index';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const useStyles = makeStyles((theme) => ({
    
    cardBox: {
      width: '100wh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    label: {
      color: theme.palette.common.white,
      '&$focused': {
        color: theme.palette.common.white,
      },
    },
    focused: {
      color: theme.palette.common.white,
    },
    outlinedInput: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.common.white,
      },
      '& $notchedOutline': {
        border: `1px solid ${theme.palette.common.white}`,
      },
      '&:hover $notchedOutline': {
        border: `1px solid ${theme.palette.primary.light}`,
      },
    },
    authButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    authButtonText:{
        color: 'white'
    },
    notchedOutline: {},
    helperText: {
      color: theme.palette.error.light,
    },
    checkbox:{
      color: theme.palette.primary.light,
     
    },
  }));
export const QuestionForm = ({ handleSubmit, handleChange, inputQuestion }) => {
    const classes = useStyles();
    const variantTitle=['variant 1', 'variant 2', 'variant 3', 'variant 4']
  return (
    <Card
   className={classes.cardBox}
    >
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <TextField
                label="Question"
                variant="standard"
                multiline
                focused
                //   disabled={loading}
                // errors={!!errors.userName}
                autoFocus={true}
                margin="normal"
                required
                fullWidth
                id="content"
                name="content"
                autoComplete="content"
                placeholder={'Enter Question'}
                onChange={handleChange}
                // helperText={errors.userName}
                value={inputQuestion.content}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.outlinedInput,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input,
                    },
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
              />
            </Grid>
            <Grid container>
           {variantTitle.map((item, i)=> <Grid item xs={6}>
              <TextField
                label={item}
                variant="standard"
                multiline
                focused
                //   disabled={loading}
                // errors={!!errors.password}
                autoFocus={false}
                margin="normal"
                required
                fullWidth
                id={i}
                name="variant"
                placeholder={`Enter ${item}`}
                onChange={handleChange}
                // helperText={errors.password}
                value={inputQuestion.variants[i].variant}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.outlinedInput,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input,
                    },
                  }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
              />
                    <Checkbox className={classes.checkbox} id={String(i)}   onChange={handleChange} checked={inputQuestion.variants[i].isCorrect} color="success" />
            </Grid>)}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
             className={classes.authButton}
          >
            <Button type="submit" className={classes.authButtonText} variant="outlined">
              Create Question
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
