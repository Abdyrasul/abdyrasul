import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import AboutMe from "./AboutMe";
import FeaturedWorks from "./FeaturedWorks";
import Contact from "./Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
    },
  },

  personnelName: {
    fontSize: 30,
    textAlign: "center",
    border: "3px solid white",
    padding: 5,
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  text: {
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
    // borderRadius: 10,
  },
  image: {
    position: "relative",
    height: 250,
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
    flexDirection: "column",
    justify: "end",
    // border: "3px solid white"
  },
  imageBackdrop: {
    position: "absolute",
    // borderRadius: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },

  gridList: {
    width: "100%",
    height: 450,
  },

  media: {
    height: 350,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "100%",
    objectFit: "stretch",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header name="HOME"></Header>
      <Container maxWidth="xl" className={classes.root}>
        <CardMedia className={classes.image}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/3735769/pexels-photo-3735769.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-3735769.jpg&fm=jpg)`,
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
              Hi, I'M Rovshen
            </Typography>

            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.text}
            >
              Welcome to my personal website.
            </Typography>
          </span>
        </CardMedia>
        <AboutMe></AboutMe>
        {/* <FeaturedWorks></FeaturedWorks> */}
        <Contact></Contact>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
