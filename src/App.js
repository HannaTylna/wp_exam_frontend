import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NyheterPage from "./pages/NyheterPage";
import LoginPage from "./pages/LoginPage";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
 return (
  <div>
   <BrowserRouter>
    <Routes>
     <Route path="/home" element={<NyheterPage />} />
     <Route path="/login" element={<LoginPage />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
