import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
aboutMe:{
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.grey,
        // marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://images.unsplash.com/photo-1496753191511-bbb055f5d304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 200,
      },
      aboutMeContent:{
        // color: theme.palette.common.black,
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
      },
}))

export default function Contact() {
    const classes = useStyles();
    return (
        <Paper className={classes.aboutMe} >
          <div className={classes.overlay} />
          <Grid container>
        <Grid item md={6}>
          <div className={classes.aboutMeContent} style={{paddingTop:10}}>
            <Box display="flex" >
            <Typography component="h1" variant="h5" style = {{marginRight:5,color:"#FF6B00"}}>
              |
            </Typography>
            <Typography component="h1" variant="h5" color="inherit" gutterBottom>
               CONTACT
            </Typography>
            </Box>
            
            <Typography variant="overline" color="inherit" paragraph style={{maxWidth:400,marginBottom:0}}>
              +905417350116
            </Typography>
            <Typography variant="caption" color="inherit" paragraph style={{maxWidth:400}}>
              resul.cse@gmail.com
            </Typography>
          </div>
        </Grid>
      </Grid>

          </Paper>
    )
}
