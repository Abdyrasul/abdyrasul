import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
  image2: {
    backgroundImage:
      "url(https://zksoftware.com.tr/wp-content/uploads/zkflex-personel-ekranı.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    heigth: 200,
  },
  root: {
    marginTop: 5,
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
    },
  },
  rootPaper: {
    flexGrow: 1,
  },
//   image: {
//     maxWidth: "100%",
//     height: "auto",
//   },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expansionPanel: {
    backgroundColor: "#E5F0FF",
  },
//   images: {
//     // display: "block",
//     marginLeft: "auto",
//     marginRight: "auto",
//     // maxWidth: "%40",
//     // height: "%40",
//     width: "200",
//     height: "100",
//   },
  responsive: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
  },
  headerImage: {
    // backgroundImage:
    //   "url(https://zksoftware.com.tr/wp-content/uploads/zkflex-personel-ekranı.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "80%",
    // objectFit: "stretch",
    height: 350,
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "100% !important", // Overrides inline-style
    },
  },
}));

export default function Research() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Header name="RESEARCH"></Header>
      <Container maxWidth="xl" className={classes.root}>
      <Paper className={classes.rootPaper}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Master Thesis" />
        <Tab label="Projects" />
        <Tab label="Publications" />
      </Tabs>

      <TabPanel value={value} index={0}>
      <ExpansionPanel style={{ backgroundColor: "#FFFFFF" }}>
          <ExpansionPanelSummary
            expandIcon={<Brightness2Icon style={{ color: "#2D1457" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>3D Book for kids with augmented reality on Unity.</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box flexDirection="column">
              <Typography>
              The mobile application was developed for android devices using Unity. 
              The app uses augmented reality technology to display 3D objects on a book that was designed for kids. 
              The book includes numbers, colors, and seasons as an educational purpose.
              <Link href="https://github.com/Abdyrasul/3DBook">
                  {" "}
                  Source Code (Github Public Repository){" "}
                </Link>
              </Typography>
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ExpansionPanel style={{ backgroundColor: "#FFFFFF" }}>
          <ExpansionPanelSummary
            expandIcon={<Brightness2Icon style={{ color: "#2D1457" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Other Academic Projects</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {/* <Box flexDirection="column"> */}
            <ul style = {{margin:"0"}}>
  <li>Football league DB using MS SQL</li>
  <li>Rental car automation web site using PHP.</li>
  <li>Export File Helper</li>
</ul> 
            {/* </Box> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </TabPanel>
    </Paper>
        
        
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
