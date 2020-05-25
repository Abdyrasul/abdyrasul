import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReactMarkdown from "react-markdown";
import "./style.css";
// import mdPost from "./posts/3.md";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
    },
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    // color: theme.palette.getContrastText(deepOrange[500]),
    // backgroundColor: deepOrange[500],
    marginRight: 10,
  },
  content: {
    marginTop: 20,
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  headerImage: {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2017/10/24/12/36/fog-2884435_1280.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "100%",
    objectFit: "stretch",
    height: 250,

    marginBottom: 10,
  },
}));

export default function BlogItem(props) {
  const [post, setPost] = useState("");
  const [postInfo, setPostInfo] = useState({});
  const classes = useStyles();

  useEffect(() => {
    let url = props.match.url.split("/")[2];
    let post = require("./posts/post.json");
    let postObject = post.find((t) => t.id == url);
    const mdPost = require(`./posts/${url}.md`);
    setPostInfo(postObject);
    fetch(mdPost)
      .then((response) => response.text())
      .then((text) => {
        setPost(text);
      });
    // const path = require("./posts/3.md");
    // setPost(path);
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Header name="BLOG"></Header>
      <Container maxWidth="xl" className={classes.root}>
        {/* <Box className={classes.headerImage}></Box> */}
        <Box display="flex" flexDirection="column" style={{ marginBotton: 15 }}>
          <Typography component="h2" variant="h5" className={classes.title}>
            {postInfo.title}
          </Typography>
          <Box display="flex" flexDirection="row">
            <Avatar
              className={classes.avatar}
              src={postInfo.avatarPhoto}
            ></Avatar>
            <Typography component="h3" variant="h6">
              {postInfo.author}
            </Typography>
            <Box flexGrow={1}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{ textAlign: "right" }}
              >
                {postInfo.date}
              </Typography>
            </Box>
          </Box>
          {/* <Typography
            variant="subtitle1"
            color="primary"
            style={{ textAlign: "left" }}
          >
            ig:inidzan_
          </Typography> */}
          {/* <Typography component="p" variant="body2" className={classes.content}>
            {blogItem.body}
          </Typography> */}
          <ReactMarkdown source={post} />
        </Box>
        {/* <ReactMarkdown source ={`# This is a header\n\nAnd this is a paragraph`}/> */}
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
