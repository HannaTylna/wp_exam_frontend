import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsListPage from "./pages/NewsListPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import CinemaPage from "./pages/CinemaPage";
import NewsDetailPage from "./pages/NewsDetailPage";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
 return (
  <div>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<LoginPage />} />
     <Route path="/news" element={<NewsListPage />} />
     <Route path="/:id" element={<NewsDetailPage />} />
     <Route path="/home" element={<HomePage />} />
     <Route path="/filmer" element={<FilmsPage />} />
     <Route path="/biografer" element={<CinemaPage />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
