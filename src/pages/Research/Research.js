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
import Grid from '@material-ui/core/Grid';
import kapak from './kapak.jpg'
import myPDF from "./poster_publication.pdf"
import Button from "@material-ui/core/Button"

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
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
          <Paper className={classes.paper}>
              <Grid container spacing={2}>
                  <Grid item item xs={12}> 
                  <img className={classes.img} alt="complex" src={kapak} />  
                  </Grid>
                  <Grid item xs></Grid>
                  <Grid item item xs={6} >
                      <Typography variant="h6" gutterBottom align="center">ABSTRACT</Typography>
                      <Typography variant="subtitle2" align="center">SYNTHESIS AND CHARACTERIZATION OF METAL FREE AND METAL PHTHALOCYANINES BEARING THYMOL MOIETIES DERIVED FROM ANTIMICROBIAL AND ANTIFUNGAL TERPENOIDS</Typography>
                  <Typography gutterBottom variant="subtitle1">
                  

Phthalocyanines (Pcs) are tetrapyrrolic macrocycles with 18 delocalized π- electrons and are synthetic analogues of naturally occurring porphyrins. Along with their chemical and physical stability, their architectural flexibility and broad spectroscopic properties attract the interest of chemists, physicists and industrial scientists since the discovery of their synthesis. Modifications in axial or peripheral positions of Pc ring yield wide distribution of physical and chemical characteristics [1].
Thymol is phenolic monoterpenoid compound obtained from essential oils of Thymus vulgaris, Monarda puctata [2] and various other kinds of plants. It shows wide biological activities against cancerogenous cells [3], microbial diseases [4] and also has been known to exhibit anti-inflammatory [5] and anti-oxidative effects [6].
In this work, nucleophilic substitution and azo coupling reactions were carried out between thymol and phthalonitrile compounds. Using the starting compounds obtained from these reactions, new metallo- and metal-free Pcs were synthesized in order to investigate their potential applications suitable with their chemical and physical characteristics. Furthermore, photophysical and photochemical properties of some of newly synthesized Pcs were investigated for photodynamic therapy (PDT) studies.
The structures of new compounds were determined based on the results of spectroscopic methods such as FT-IR, UV-vis, NMR and MALDI TOF MS.
Throughout this thesis it has been shown that phthalocyanines are among the most versatile and interesting compounds within molecular materials. Although technological applications based on these compounds already exist in the market, the design of phthalocyanines with suitable properties for specific applications will continue to be studied due to the possibilities of improvement and the appearance of new properties and applications of these compounds.
                </Typography>
                  </Grid>
                  <Grid item xs></Grid>
              </Grid>
          </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
            <Typography variant="h6" gutterBottom align="center">Timol sübstitüe oxo köprülü yeni ftalosiyaninlerin sentezi, karakterizasyonu
ve fotodinamik terapi aktivitelerinin araştırılması</Typography>
<Button color="secondary" size="small">
            <a
                href={myPDF}
                download="Publication.pdf"
                style={{ textDecoration: "none" }}
              >
               Download Publication
              </a>
            </Button>
      </TabPanel>
    </Paper>
        
        
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
