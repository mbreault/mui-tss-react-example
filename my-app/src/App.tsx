import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const useStyles = makeStyles({ name: 'MUIExample' })(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    },
    helloWorld: {
      color: 'red',
      fontStyle: 'italic',
    },
  }),
);

export default function App() {
  const { classes } = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom className={classes.helloWorld}>
          Hello, World!
        </Typography>
      </Box>
    </Container>
  );
}
