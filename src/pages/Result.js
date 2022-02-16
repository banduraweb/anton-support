import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Result() {
  return (
    <div style={{background:'black'}}>
    <div className="resultText">ДЯКУЄМО ЗА ТЕСТУВАННЯ</div>
    <div className="resultWrapper">
      <div className="resultBox"></div>
    </div>
    </div>
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
    //       width: 500,
    //       height: 500,
    //     },
    //   }}
    // >
    //   <Paper elevation={0} />
    //   <Paper className="result">
    //     <div>Дякуюємо за тестування</div>{' '}
    //   </Paper>
    // </Box>
  );
}
