import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsListPage from "./pages/NewsListPage";
import LoginPage from "./pages/LoginPage";
import FilmListPage from "./pages/FilmListPage";
import CinemaListPage from "./pages/CinemaListPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import FilmDetailPage from "./pages/FilmDetailPage";
import SearchPage from "./pages/SearchPage";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
 return (
  <div>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<LoginPage />} />
     <Route path="/home" element={<NewsListPage />} />
     <Route path="/:id" element={<NewsDetailPage />} />
     <Route path="/filmer" element={<FilmListPage />} />
     <Route path="/filmer/:id" element={<FilmDetailPage />} />
     <Route path="/biografer" element={<CinemaListPage />} />
     <Route path="/search" element={<SearchPage />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
