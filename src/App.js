import React, { Component } from "react";

//  STYLE
import "./init_app.css";

// IMPORTS REACSTRAP
import { Row, Col } from "reactstrap";

// HOMEMADE COMPONENTS
import Navi from "./Navbar";
import Footer from "./Footer.js";
import Clicker from "./Clicker";
import Tableaux from "./Tableaux";
import NameForm from "./NameForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navi />
        </header>
        <div className="BackGround">
          <Row id="skeleton_one">
            <Col sm="12" lg={{ size: 6, offset: 3 }} />
          </Row>
          <Row id="skeleton_two">
            <Col sm="12" lg="3">
              {/* Add-ons ATTENTE DE COMPILATION*/}
            </Col>
            <Col sm="12" lg="6">
              {"pseudo" in localStorage ? <Clicker /> : <NameForm />}
            </Col>
            <Col sm="12" lg="3">
              <Tableaux />
            </Col>
          </Row>
          <footer className="App-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
