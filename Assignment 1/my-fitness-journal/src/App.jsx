import React from "react";
import "./App.css";

import MyFitnessJourney from "./components/MyFitnessJourney";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFitnessJourney />
      </header>
    </div>
  );
}

export default App;
