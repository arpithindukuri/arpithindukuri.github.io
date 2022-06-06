import React from "react";
import { Route, Routes, Link, HashRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
