import React from "react";
import Home from "./home";
import { Route,Switch } from "react-router-dom";
import about from "./about";
import contact from "./contact";
import services from "./services";
const App = () => {
  return (
    <>
      <switch>
        <Home />
      </switch>
    </>
  );
};
export default App;
