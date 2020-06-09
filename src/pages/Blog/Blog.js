import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FeaturedPost from "./FeaturedPost";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
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
  headerImage: {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2016/02/19/11/25/business-1209705_1280.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "100%",
    objectFit: "stretch",
    height: 250,
    marginBottom: 10,
  },
}));


export default function Blog() {
  const classes = useStyles();
  const post = require("./posts/post.json");
  return (
    <React.Fragment>
      <CssBaseline />
      <Header name="BLOG"></Header>
      <Container maxWidth="xl" className={classes.root}>
        <Box
          className={classes.headerImage}
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2016/02/19/11/25/business-1209705_1280.jpg)`,
          }}
        ></Box>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
        >
          {post.map((post) => (
            <FeaturedPost key={post.id} post={post}></FeaturedPost>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
