import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles";
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
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.root}>
      <img className={classes.image} src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
      </Container>
    </React.Fragment>
  );
}
