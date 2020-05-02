import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
