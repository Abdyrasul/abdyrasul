import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Photography from "./pages/Photography";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./style.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header selectedPage="HOME"></Header>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/photo" component={Photography}></Route>
            <Route path="/blogs" component={Blog}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
          </Switch>
          {/* <Home></Home>
        <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
