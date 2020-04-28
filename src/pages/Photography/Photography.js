import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MainPhotoAlbum from "./MainPhotoAlbum.js"



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent:"space-between",
    width:"80%",
    margin: "auto",
    overflowX: "auto",
  }
})
const albums = [{
  title:"Ashgabat",
  img:"",
  description:"Description 1",
  year:2020

},
{
  title:"Istanbul",
  img:"",
  description:"Description 2",
  year:2020

},
{
  title:"Belgrad",
  img:"",
  description:"Description 3",
  year:2020

},
]
export default function Photography(props) {
 const classes = useStyles();
  return (
    <Grid container spacing={2} className = {classes.root}>
      {albums.map((item)=>(
        <MainPhotoAlbum album={item}></MainPhotoAlbum>
      ))}
  </Grid>
  );
}
