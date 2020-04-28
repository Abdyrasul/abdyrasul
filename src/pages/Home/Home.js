import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <h5>Home</h5>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
      </Container>
    </React.Fragment>
    );
  }
}

export default Home;
