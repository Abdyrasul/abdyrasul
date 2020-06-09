import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
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
    // height: 450,
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

  const getGridListCols = () => {
    console.log(`witdh: ${props.width}`);
    if (isWidthUp("xl", props.width)) {
      return 5;
    }

    if (isWidthUp("lg", props.width)) {
      return 4;
    }

    if (isWidthUp("md", props.width)) {
      return 3;
    }
    if (isWidthUp("xs", props.width)) {
      return 2;
    }

    return 3;
  };

  useEffect(() => {
    let url = props.match.url.split("/")[2];

    for (let i = 1; i < 10; i++) {
      imagesURL.push(`${url}/${i}.JPG`);
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
                // style={{ width: "80%", margin: "auto" }}
                className={classes.gridList}
                src={require(`./images/${each}`)}
              />
            ))}
          </Zoom>
        </div>
        {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
        {/* <div className={classes.root}>
          <GridList className={classes.gridList} cols={getGridListCols()}>
            {images.map((url2, index) => (
              <GridListTile key={index} cols={1}>
                <CardActionArea component={Link} to={`#`}>
                  <CardMedia
                    className={classes.media2}
                    image={require(`./images/${url2}`)}
                    title="Paella dish"
                  />
                </CardActionArea>
              </GridListTile>
            ))}
          </GridList>
        </div> */}

        {/* <PhotoSwipe></PhotoSwipe> */}
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default withWidth()(AlbumItem);
