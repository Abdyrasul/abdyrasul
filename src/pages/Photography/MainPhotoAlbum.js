import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      
    },
    media: {
      height: 140,
    },
    grid:{
      display:'flex',
    }
  });

export default function MainPhotoAlbum(props) {
    const classes = useStyles();
    const album = props.album;
    return (
        <Card className={classes.root}>
        <CardActionArea component="a" href="#">
          <CardMedia
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            title={album.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {album.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {album.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
}
