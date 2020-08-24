import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Photography from "./pages/Photography/Photography";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";
import AlbumItem from "./pages/Photography/AlbumItem";
import BlogItem from "./pages/Blog/BlogItem";
import ResearchItem from "./pages/Research/Research";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          {/* <Header></Header>
        <Footer></Footer> */}

          <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/abdyrasul"} exact component={Home}></Route>
            <Route path="/photo" exact component={AlbumItem}></Route>
            <Route path="/blogs" component={Blog}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/research" component={ResearchItem}></Route>
            {/* <Route path="/photo/:id" component={AlbumItem}></Route> */}
            <Route path="/blog/:id" component={BlogItem}></Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
