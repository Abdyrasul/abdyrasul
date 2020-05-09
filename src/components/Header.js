import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "typeface-roboto";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import { Router, MemoryRouter} from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlbumItem from "../pages/Photography/AlbumItem";
import BlogItem from "../pages/Blog/BlogItem";

import Photography from "../pages/Photography/Photography";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import "../style/style2.css";

// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to="/blogs" {...props} />
// ));

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: "Dancing Script",
    fontSize: 35,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    width: "80%",
    margin: "auto",
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // backgroundColor:"#FFDFDC",
      // paddingBottom:"30px"
    },
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    "&:hover": {
      color: theme.palette.secondary.main,
      // borderBottom: `2px solid ${theme.palette.success.dark}`,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:13
    },
  },

  selectedPage: {
    padding: theme.spacing(1),
    flexShrink: 0,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:13
    },
  },
  socialIcons:{
    [theme.breakpoints.down("xs")]: {
      fontSize: 17
      // backgroundColor:"#FFDFDC",
      // paddingBottom:"30px"
    },
  }
}));

export default function Header(props) {
  const [SelectedPage, setSelectedPage] = useState("HOME");
  const classes = useStyles();
  // const sections = ["HOME", "PHOTOGRAPHY", "BLOG", "PORTFOLIO"];
  const sections = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "PHOTOGRAPHY",
      url: "/photo",
    },
    {
      name: "BLOG",
      url: "/blogs",
    },
    {
      name: "PORTFOLIO",
      url: "/portfolio",
    },
  ];

  // function clickedEvent = ()=> {

  //   console.log("Clicked");
  // }
  return (
    <Router>
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <a href="https://www.instagram.com/abdiresul/">
            <InstagramIcon className = {classes.socialIcons} color="primary"></InstagramIcon>
          </a>
          <a href="https://www.linkedin.com/in/abdyrasul-oraznyyazov-245933121/">
            <LinkedInIcon className = {classes.socialIcons} color="primary"></LinkedInIcon>
          </a>
          <a href="https://github.com/Abdyrasul/">
            <GitHubIcon  className = {classes.socialIcons} color="primary"></GitHubIcon>
          </a>
          <Typography
            component="h2"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Abdyrasul
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map((item) => (
            <Link
              component={RouterLink}
              to={item.url}
              color="inherit"
              noWrap
              key={item.name}
              variant="button"
              href="#"
              underline="none"
              onClick={() => {
                setSelectedPage(item.name);
              }}
              className={
                SelectedPage === item.name
                  ? classes.selectedPage
                  : classes.toolbarLink
              }
            >
              {item.name}
            </Link>
          ))}
        </Toolbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/photo" exact component={Photography}></Route>
          <Route path="/blogs" component={Blog}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/photo/:id" component={AlbumItem}></Route>
          <Route path="/blog/:id" component={BlogItem}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
  selectedPage: PropTypes.string,
};
