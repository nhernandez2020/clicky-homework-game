import React from "react";
import Jumbotron from "./components/Jumbotron";
import GameContainer from "./components/GameContainer";
//import logo from './logo.svg';
import "./App.css";

const App = () => (
  <div className="container-fluid">
    <Jumbotron />
    <GameContainer />
  </div>
);

export default App;
