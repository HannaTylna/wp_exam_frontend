import React from "react";
import { useParams } from "react-router-dom";
import NewsDetail from "../components/NewsDetail";
import Navigation from "../components/Navigation";

export default function NewsDetailPage() {
 const params = useParams();
 return (
  <>
   <Navigation />
   <NewsDetail id={params.id} />
  </>
 );
}
