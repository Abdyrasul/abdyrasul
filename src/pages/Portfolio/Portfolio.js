import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Brightness2Icon from '@material-ui/icons/Brightness2';


const useStyles = makeStyles((theme)=>({
image2:{
  backgroundImage: 'url(https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    heigth:200
},
root: {
  marginTop: 5,
  width: "80%",
  [theme.breakpoints.down("xs")]: {
    width: "100% !important", // Overrides inline-style
  },
},
image:{
  maxWidth: "100%",
  height: "auto",
},
heading: {
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightRegular,
},
expansionPanel:{
  backgroundColor: '#E5F0FF',
}
}));

export default function Portfolio() {
  const classes = useStyles();
  console.log("Portfolio Syafasinda")
  return (
    <React.Fragment>
      <CssBaseline />
      <Header name ="PORTFOLIO"></Header>
      <Container maxWidth="xl" className={classes.root}>
      <ExpansionPanel  style = {{ backgroundColor: '#F1F2F2'}}>
        <ExpansionPanelSummary
          expandIcon={<Brightness2Icon style = {{color:"#2D1457"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>ZKFlex</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {/* <img className={classes.image} src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img> */}
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style = {{ backgroundColor: '#F1F2F2'}}>
        <ExpansionPanelSummary
          expandIcon={<Brightness2Icon  style = {{color:"#2D1457"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ZKToolbox</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style = {{ backgroundColor: '#F1F2F2'}}>
        <ExpansionPanelSummary
          expandIcon={<Brightness2Icon style = {{color:"#2D1457"}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Project 3</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
