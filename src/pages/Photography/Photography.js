import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainPhotoAlbum from "./MainPhotoAlbum.js";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 2,
    justifyContent: "center",
    width: "80%",
    margin: "auto",
    overflowX: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      // margin:0,
      // padding:0,
    },
  },
  header: {
    fontSize: 30,
  },
  container: {
    // backgroundColor:'grey'
  },
  div: {
    marginTop: 5,
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
    },
  },
}));
const albums = [
  {
    title: "Ashgabat",
    staticFolder: "ashgabat",
    img:
      "https://1.bp.blogspot.com/-KOzmmj2YBtU/XTRhkwi8s3I/AAAAAAAAh8s/maLMA0OMF2sjHJGfWqve7pAS4nwzQi0ewCKgBGAs/s640/Ashgabat-Walking-Tour-98.jpg",
    description:
      " A magnificent and clean city with lavish palaces and mosques surrounded by vast expanses of manicured parkland, the city holds the Guinness World Record for having the highest number of marble-clad buildings.",
    year: 2018,
  },
  {
    title: "Moda Sahili",
    staticFolder: "moda",
    img:
      "https://lh3.googleusercontent.com/proxy/EF41CfMr4qRRoZF6_cpktwCSHb4-oQ0QsaI-qZa8JjKMpiLUN3xMz1ew6gu_s_MmGFAIhB1huo0E7nPnK2DVkeZ0IVf_zAtQpBXMzI6HeaFgJpZwOCtDDw",
    description:
      "Moda park is located in the west of Kadıköy on the Anatolian coast, overlooking the Marmara Sea and Prince Islands, it is a famous district with its nature and frequent restaurants.",
    year: 2018,
  },
  {
    title: "Belgrad Ormanı",
    staticFolder: "belgrad",
    img:
      "https://img.a24.com.tr/hbrResim/Belgrad-ormani-nerede-nasil-gidilir-9663.jpg",
    description:
      "With its recreation areas, aqueducts, natural life and peaceful environment, Belgrad Forest is one of the escape points for Istanbul residents to breathe.",
    year: 2019,
  },
];
export default function Photography(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header name="PHOTOGRAPHY"></Header>
      <div>
        <Typography align="center" className={classes.header}>
          {" "}
          GALLERY{" "}
        </Typography>
        <Grid container spacing={4} className={classes.root}>
          {albums.map((item) => (
            <MainPhotoAlbum album={item}></MainPhotoAlbum>
          ))}
        </Grid>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}
