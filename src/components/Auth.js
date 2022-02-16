import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  colorTextArea: {
    color: 'red',
  },
}));

export default function Auth() {
  const classes = useStyles();
  let navigate = useNavigate();
  const handleClick = () => navigate('/quize');
  return (
    <div className="authWrapper">
      <Card
        sx={{
          maxWidth: '28%',
          margin: '0',
          position: 'absolute',
          top: '40%',
          left: '40%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <CardContent>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="standard"
                focused
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="standard"
                focused
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className="authButton">
            <Button onClick={handleClick} variant="outlined">
              Per aspera ad astra
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
