import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
    },
  },
  headerImage:{
    position: 'relative',
    // backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.pexels.com/photos/916335/pexels-photo-916335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:250,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  personnelName:{
    fontSize: 30,
    textAlign:"center",
    border: "3px solid white",
    padding: 5,
    marginBottom:10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  text:{
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    borderRadius: 10,
  },
  image: {
    position: "relative",
    height: 250,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 140,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        fontSize: 25,
        // border: '4px solid currentColor',
      },
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    display:"flex",
    flexDirection:"column",
    justify:"end"
    // border: "3px solid white"
  },
  imageBackdrop: {
    position: "absolute",
    borderRadius: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },


}));

export default function Home() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.root}>
        <CardMedia
            className={classes.image}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/916335/pexels-photo-916335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.personnelName}
              >
                Hi, I'M Abdyrasul
              </Typography>

              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.text}
              >
                Welcome to my website.
              </Typography>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.text}
              >
                I am a software developer from Istanbul.
              </Typography>
            </span>
          </CardMedia>
        </Container>
      </React.Fragment>
    );

}

