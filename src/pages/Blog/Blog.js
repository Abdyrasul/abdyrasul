import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid";
import FeaturedPost from "./FeaturedPost";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
    },
  },
  headerImage:{
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/02/19/11/25/business-1209705_1280.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize:"cover",
    height:250,
    marginBottom:10,
  }
}));

const featuredPosts = [
  {
    id:1,
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    linkText: "Continue reading…",
  },
  {
    id:2,
    title: "Title of a longer featured blog post",
    date: "Nov 11",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    linkText: "Continue reading…",
  },
  {
    id:3,
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    linkText: "Continue reading…",
  },
];

export default function Blog() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.root}>
        <Paper className={classes.headerImage}  style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/02/19/11/25/business-1209705_1280.jpg)` }}>

        </Paper>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
        >
          {featuredPosts.map((post) => (
            <FeaturedPost post={post}></FeaturedPost>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
