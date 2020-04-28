import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "typeface-roboto";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/style2.css";

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/blogs" {...props} />
));

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
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    "&:hover": {
      color: theme.palette.secondary.main,
      // borderBottom: `2px solid ${theme.palette.success.dark}`,
    },
  },

  selectedPage: {
    padding: theme.spacing(1),
    flexShrink: 0,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function Header(props) {
  const [SelectedPage, setSelectedPage] = useState(props.selectedPage);
  const classes = useStyles();
  const sections = ["HOME", "PHOTOGRAPHY", "BLOG", "PORTFOLIO"];

  // function clickedEvent = ()=> {

  //   console.log("Clicked");
  // }
  return (
    <Router>
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <a href="https://www.instagram.com/abdiresul/">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/abdyrasul-oraznyyazov-245933121/">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
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
              to={`/`}
              color="inherit"
              noWrap
              key={item}
              variant="button"
              href="#"
              underline="none"
              onClick={() => {
                setSelectedPage(item);
              }}
              className={
                SelectedPage === item
                  ? classes.selectedPage
                  : classes.toolbarLink
              }
            >
              {item}
            </Link>
          ))}
        </Toolbar>
      </React.Fragment>
    </Router>
  );
}
Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
  selectedPage: PropTypes.string,
};
