import React, { useState, useEffect } from 'react';
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80%",
    // height: 450,
  },
}));

export default function AlbumItem({match}) {
    const classes = useStyles();
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log("Icerde")
        fetch(`https://pixabay.com/api/?key=16006455-f87c228e04c6de5a2495bf300&q=${term}&image_type=photo&pretty=true`)
          .then(res => res.json())
          .then(data => {
            setImages(data.hits);
            setIsLoading(false);
          })
          .catch(err => console.log(err));
      }, [term]);
    return (
        <Container>
            {!isLoading && images.length === 0 && <h1>No Images Found</h1> }
            <div className={classes.root}>
            <GridList  className={classes.gridList} cols={3}>
                {images.map((tile) => (
            <GridListTile key={tile.id} >
            <img src={tile.webformatURL} alt={tile.tags} />
            </GridListTile>
        ))}
            </GridList>
    </div>
        
        </Container>
    )
}
