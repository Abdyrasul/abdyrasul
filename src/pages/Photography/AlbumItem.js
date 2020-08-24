import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Zoom } from "react-slideshow-image";
// import "./slide.css";
// import CardMedia from "@material-ui/core/CardMedia";
// import Card from "@material-ui/core/Card";
// const images = [
//   'images/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg',
//   'images/slide_5.jpg',
//   'images/slide_6.jpg',
//   'images/slide_7.jpg'
// ];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "auto",
    },
    objectFit: "contain",
    height: 550,
  },
  mainImage: {
    // backgroundSize: "cover",
    display: "inline-block",
  },
  media: {
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      height: 250,
    },
    // width: "80%",
  },
  card: {
    maxWidth: 500,
  },
  media2: {
    height: 200,
    // paddingTop: "56.25%", // 16:9
  },
}));

function AlbumItem(props) {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const imagesURL = [];

  useEffect(() => {
    // let url = props.match.url.split("/")[2];
    let url = "rovshen";

    for (let i = 1; i < 17; i++) {
      imagesURL.push(`${url}/${i}.jpeg`);
      setImages(imagesURL);
    }
    // fetch(
    //   `https://pixabay.com/api/?key=16006455-f87c228e04c6de5a2495bf300&q=${term}&image_type=photo&pretty=false`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.hits);
    //     // setImages(data.hits);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => console.log(err));
  }, [term]);
  return (
    <React.Fragment>
      <Header name="PHOTOGRAPHY"></Header>
      <Container>
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {images.map((each, index) => (
              <img
                key={index}
                alt="Alternative"
                // style={{ width: "80%", margin: "auto" }}
                className={classes.gridList}
                src={require(`./images/${each}`)}
              />
            ))}
          </Zoom>
        </div>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default withWidth()(AlbumItem);
