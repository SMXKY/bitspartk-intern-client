import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Component } from "react";
import { NavBar } from "./components/NavBar/NavBar.Component";
import { LandingPage } from "./pages/LandingPage/LandingPage.Component";
import { SideBar } from "./components/SideBar/SideBar.Component";
import { Footer } from "./components/Footer/Footer.Componet";
import { ApplicationForm } from "./pages/ApplicationForm/ApplicationForm.Component";
import { Alert } from "./components/Alert/Alert.Component";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Alert />
        <SideBar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/apply" element={<ApplicationForm />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
