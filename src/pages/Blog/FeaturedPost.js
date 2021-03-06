import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginBottom: 20,
    // display: "flex",
  },
  link: {
    textAlign: "right",
    justifyContent: "end",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: 10,
    alignContent: "center",
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const post = props.post;
  return (
    <Grid item xs={12}>
      <CardActionArea component={Link} to={`/blog/${post.id}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Box display="flex" flexDirection="row">
                <Box alignSelf="center">
                  <Avatar
                    className={classes.avatar}
                    src={post.avatarPhoto}
                  ></Avatar>
                </Box>

                <Typography component="h3" variant="h6">
                  {post.author}
                </Typography>
              </Box>

              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
