import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

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
    console.log("Icerde");
    fetch(
      `https://pixabay.com/api/?key=16006455-f87c228e04c6de5a2495bf300&q=${term}&image_type=photo&pretty=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <Container>
      {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={getGridListCols()}>
          {images.map((tile) => (
            <GridListTile key={tile.id} cols={1}>
              <img
                className={classes.mainImage}
                src={tile.webformatURL}
                alt={tile.tags}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Container>
  );
}
export default withWidth()(AlbumItem);
