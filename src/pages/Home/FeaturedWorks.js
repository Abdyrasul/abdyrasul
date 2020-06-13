import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

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

export default function FeaturedWorks() {
  const classes = useStyles();
  return (
    <Paper
      className={classes.aboutMe}
      style={{
        height: 200,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1513708929605-6dd0e1b081bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80)",
      }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.aboutMeContent} style={{ paddingTop: 10 }}>
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
                color="inherit"
                gutterBottom
              >
                FEATURED WORKS
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="inherit"
              paragraph
              style={{ maxWidth: 400 }}
            >
              During my student and work experiences, I had an opportunity to
              work on several projects. You can find some of them on the{" "}
              <Link href="/portfolio" color="secondary">
                {" "}
                Portfolio{" "}
              </Link>{" "}
              page.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
