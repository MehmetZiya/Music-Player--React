import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navLinks : [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},

      ]
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar navLinks={this.state.navLinks} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        
        
        
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;
