import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Component } from "react";
import { NavBar } from "./components/NavBar/NavBar.Component";
import { LandingPage } from "./pages/LandingPage/LandingPage.Component";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
