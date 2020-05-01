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
import VisibilityIcon from '@material-ui/icons/Visibility';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) =>({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // border: '2px solid #FFDFDC',
        borderRadius:15
    },
    media: {
      height: 140,
    },
    grid:{
      display:'flex',
    },
    cardContent: {
        display:'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
      image: {
        position: 'relative',
        height: 200,
        borderRadius:15,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            fontSize:25,
            // border: '4px solid currentColor',
            
          },
        },
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        borderRadius:15
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        transition: theme.transitions.create('fontSize'),
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
     
}));

export default function MainPhotoAlbum(props) {
    const classes = useStyles();
    const album = props.album;
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
        <CardActionArea component="a" href="#">
            

          <CardMedia
            className={classes.image}
            // image={album.img}
            title={album.title}
          >
            
<span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${album.img})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {album.title}
              {/* <span className={classes.imageMarked} /> */}
            </Typography>
          </span>
          </CardMedia>
          <CardContent className = {classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
            {album.description}
            </Typography>
            <Typography variant="body2" color="primary" align="right" style={{marginTop:7}}>
            100 views
            </Typography>
          </CardContent>
          
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
     </Grid>
    )
}
