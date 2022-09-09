import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
