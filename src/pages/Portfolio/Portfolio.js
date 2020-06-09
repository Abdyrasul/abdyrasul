import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Link from "@material-ui/core/Link";
import compressAppImage from "./compressApp.png";
import Box from "@material-ui/core/Box";

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
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expansionPanel: {
    backgroundColor: "#E5F0FF",
  },
  images: {
    // display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    // maxWidth: "%40",
    // height: "%40",
    width: "200",
    height: "100",
  },
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

export default function Portfolio() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header name="PORTFOLIO"></Header>
      <Container maxWidth="xl" className={classes.root}>
        <ExpansionPanel style={{ backgroundColor: "#F1F2F2" }}>
          <ExpansionPanelSummary
            expandIcon={<Brightness2Icon style={{ color: "#2D1457" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>ZKFlex</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {/* <img className={classes.image} src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img> */}
            <Box flexDirection="column">
              <Typography>
                ZKFlex provides a reliable system according to all legal and
                safety requirements. Monitoring the location and activity of
                people like visitors, members and employees, provides valuable
                data for performance and security management within the
                buildings and facilities. The application was developed by our
                ZKSoftware Developer Team using technologies like JavaFX, JAVA
                Spring, MS SQL, and HEROKU.
                <Link href="https://bitbucket.org/zksoftwaredeveloperteam/zkflex-origin/">
                  {" "}
                  Source Code (BitBucket Private Repository){" "}
                </Link>
              </Typography>
              {/* <img
                src="https://zksoftware.com.tr/wp-content/uploads/zkflex-personel-ekranı.jpg"
                className={classes.responsive}
              ></img> */}
              <Box
                className={classes.headerImage}
                style={{
                  backgroundImage: `url(https://zksoftware.com.tr/wp-content/uploads/zkflex-personel-ekranı.jpg)`,
                }}
              ></Box>
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ backgroundColor: "#F1F2F2" }}>
          <ExpansionPanelSummary
            expandIcon={<Brightness2Icon style={{ color: "#2D1457" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>ZKToolbox</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              ZKToolbox was developed by me to transfer attendance records of
              ZKTeco Standalone devices. Usage of the application is to fetch
              all event logs from selected devices and export the data as a pdf,
              txt, or excel file. Additionally, the program helps to listen to
              real-time events. Small features like authorization and "drag and
              drop" was added. The application developed using the JavaFX
              framework.
              <Link href="https://bitbucket.org/zksoftwaredeveloperteam/zkflex-toolbox/src/master/">
                {" "}
                Source Code (BitBucket Private Repository){" "}
              </Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ backgroundColor: "#F1F2F2" }}>
          <ExpansionPanelSummary
            expandIcon={<Brightness2Icon style={{ color: "#2D1457" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              JavaFX Compress Desktop Application
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {/* <img className={classes.image} src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img> */}
            <Box flexDirection="column">
              <Typography>
                The program is used to compress input data using the Huffman
                tree algorithm. Huffman coding tree or Huffman tree is a full
                binary tree in which each leaf of the tree corresponds to a
                letter in the given alphabet.
                <Link href="https://github.com/Abdyrasul/CompressJavaFX">
                  {" "}
                  Source Code (Github Public Repository){" "}
                </Link>
              </Typography>
              <Box
                className={classes.headerImage}
                style={{
                  backgroundImage: `url(${compressAppImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                  // backgroundSize: "60%",
                  // objectFit: "stretch",
                  height: 400,
                  marginTop: 10,
                }}
              ></Box>
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ backgroundColor: "#F1F2F2" }}>
          <ExpansionPanelSummary
            expandIcon={<Brightness2Icon style={{ color: "#2D1457" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Emotion Analysis using Tensorflow</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box flexDirection="column">
              <Typography>
              My interest in artificial intelligence and its applications increased from the first year at university. The topic
of my graduate project thesis was: "Emotion analysis using wearable sensor device in 2D
Displays versus 3D Virtual Reality environments." The research aims to conduct a comparative
analysis of emotion recognition in the 2D displays and 3D Virtual Environments.
              </Typography>
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ backgroundColor: "#F1F2F2" }}>
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
        <ExpansionPanel style={{ backgroundColor: "#F1F2F2" }}>
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
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
