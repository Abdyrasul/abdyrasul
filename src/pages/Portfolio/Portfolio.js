import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Portfolio() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <h5>Portfolio</h5>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
      </Container>
    </React.Fragment>
  );
}
