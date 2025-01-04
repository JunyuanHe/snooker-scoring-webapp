import React, { useState } from "react";

// to use styles, import the necessary CSS files
import "./App.css";
import "../utilities.css";
// import Stopwatch from "./modules/Stopwatch";
import Scene from "./pages/Scene";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  const [showStopwatch, setShowStopwatch] = useState(true);
  return (
    <>
      <div className="App-container">
        <Scene />
      </div>
    </>
  );
};

export default App;
