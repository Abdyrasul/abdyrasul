import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
const useStyles = makeStyles((theme)=>({
image2:{
  backgroundImage: 'url(https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    heigth:200
},
root: {
  marginTop: 5,
  width: "80%",
  [theme.breakpoints.down("xs")]: {
    width: "100% !important", // Overrides inline-style
  },
},
image:{
  maxWidth: "100%",
  height: "auto",
}
}));

export default function Portfolio() {
  const classes = useStyles();
  console.log("Portfolio Syafasinda")
  return (
    <React.Fragment>
      <CssBaseline />
      <Header name ="PORTFOLIO"></Header>
      <Container maxWidth="xl" className={classes.root}>
      <img className={classes.image} src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
