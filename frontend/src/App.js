import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from '../src/components/landingPage';
import LobbyPage from '../src/components/lobbyPage';
import GamePage  from "./components/gamePage";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the LandingPage */}
          <Route path="/" element={<LandingPage />} />

          {/* Route for the LobbyPage */}
          <Route path="/lobby" element={<LobbyPage />} />

          {/* Route for the GamePage */}
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
