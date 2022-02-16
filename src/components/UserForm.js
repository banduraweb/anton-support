import React from 'react';
import TextField from '@mui/material/TextField/index';
import Card from '@mui/material/Card/index';
import CardContent from '@mui/material/CardContent/index';
import Button from '@mui/material/Button/index';
import Grid from '@mui/material/Grid/index';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles/index';

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
    selectUser: {
        color:'white',
        border: `1px solid ${theme.palette.primary.light}`
    }
  }));
export const UserForm = ({ handleSubmit, handleChange, input }) => {
    const classes = useStyles();

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
                label="User Name"
                variant="standard"
                focused
                //   disabled={loading}
                // errors={!!errors.userName}
                autoFocus={true}
                margin="normal"
                required
                fullWidth
                id="userName"
                name="userName"
                autoComplete="userName"
                placeholder={'Enter User Name'}
                onChange={handleChange}
                // helperText={errors.userName}
                value={input.userName}
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
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="standard"
                focused
                //   disabled={loading}
                // errors={!!errors.password}
                autoFocus={false}
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                placeholder={'Enter Your Password'}
                onChange={handleChange}
                // helperText={errors.password}
                value={input.password}
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
              <Select
                className={classes.selectUser}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={input.role ? input.role : 'ADMIN'}
                displayEmpty
                name="role"
                onChange={handleChange}
              >
                <MenuItem value="ADMIN">ADMIN</MenuItem>
                <MenuItem value="USER">USER</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
             className={classes.authButton}
          >
            <Button type="submit" className={classes.authButtonText} variant="outlined">
              Create User
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
