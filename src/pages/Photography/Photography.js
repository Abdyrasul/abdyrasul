import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MainPhotoAlbum from "./MainPhotoAlbum.js"
import Container from "@material-ui/core/Container"



const useStyles = makeStyles((theme) =>({
  root: {
    // flexGrow: 2,
    justifyContent:"center",
    width:"80%",
    margin: "auto",
    overflowX: "auto",
    [theme.breakpoints.down('xs')]:{
      width:"95%",
      // margin:0,
      // padding:0,
  },
  },
  header:{
    fontSize:30

  },
  container:{
    // backgroundColor:'grey'
  }
}))
const albums = [{
  title:"Ashgabat",
  img:"https://1.bp.blogspot.com/-KOzmmj2YBtU/XTRhkwi8s3I/AAAAAAAAh8s/maLMA0OMF2sjHJGfWqve7pAS4nwzQi0ewCKgBGAs/s640/Ashgabat-Walking-Tour-98.jpg",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nam omnis facere quasi fugiat delectus iure. Voluptatibus dolorem voluptas vero laudantium quidem, sint hic deleniti assumenda eum consectetur impedit! Maiores.",
  year:2020

},
{
  title:"Istanbul",
  img:"https://pix10.agoda.net/geo/city/14932/1_14932_02.jpg?s=1920x822",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nam omnis facere quasi fugiat delectus iure. Voluptatibus dolorem voluptas vero laudantium quidem, sint hic deleniti assumenda eum consectetur impedit! Maiores.",
  year:2020

},
{
  title:"Belgrad",
  img:"https://www.turizmgunlugu.com/wp-content/uploads/2018/10/belgrad-696x412.jpg",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nam omnis facere quasi fugiat delectus iure. Voluptatibus dolorem voluptas vero laudantium quidem, sint hic deleniti assumenda eum consectetur impedit! Maiores.",
  year:2020

},

]
export default function Photography(props) {
 const classes = useStyles();
  return (
    
      <div>
    <Typography align="center" className={classes.header}> ALBUMS </Typography>
    <Grid container spacing={4} className = {classes.root}>
      {albums.map((item)=>(
        <MainPhotoAlbum album={item}></MainPhotoAlbum>
      ))}
  </Grid>
  </div>
 
  );
}
