import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header selectedPage="HOME"></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
