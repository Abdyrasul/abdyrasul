import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// import CardMedia from "@material-ui/core/CardMedia";
// import Card from "@material-ui/core/Card";

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
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    // height: 450,
  },
  mainImage: {
    backgroundSize: "cover",
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
        {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={getGridListCols()}>
            {images.map((url2, index) => (
              <GridListTile key={index} cols={1}>
                {/* <a href="#"> */}
                <img
                  className={classes.mainImage}
                  src={require(`./images/${url2}`)}
                  alt={url2}
                />
                {/* </a> */}
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default withWidth()(AlbumItem);
