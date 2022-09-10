import React from "react";
import { useParams } from "react-router-dom";
import FilmDetail from "../components/FilmDetail";
import Navigation from "../components/Navigation";

export default function FilmDetailPage() {
 const params = useParams();
 return (
  <>
   <Navigation />
   <FilmDetail id={params.id} />
  </>
 );
}
