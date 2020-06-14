import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import myPDF from "./resume.pdf";

const useStyles = makeStyles((theme) => ({
  aboutMe: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 250,
  },
  aboutMeContent: {
    // color: theme.palette.common.black,
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Paper className={classes.aboutMe}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.aboutMeContent}>
            <Box display="flex">
              <Typography
                component="h1"
                variant="h5"
                style={{ marginRight: 5, color: "#FF6B00" }}
              >
                |
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                color="textPrimary"
                gutterBottom
              >
                ABOUT ME
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="textSecondary"
              paragraph
              style={{ maxWidth: 250 }}
            >
              I'm an Istanbul based software developer focused on writing clean,
              elegant, and efficient code.
            </Typography>
            <Button variant="contained" size="small">
              <a
                href={myPDF}
                download="My_File.pdf"
                style={{ textDecoration: "none" }}
              >
                Download CV Here
              </a>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
