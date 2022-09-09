import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Navigation from "../components/Navigation";

export default function HomePage() {
 const [result, setResult] = useState([]);
 useEffect(() => {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/posts`;
  fetch(url, {
   method: "GET",
  })
   .then((res) => res.json())
   .then((data) => {
    setResult(data);
   });
 }, [result, setResult]);
 return (
  <>
   <Navigation />
   <div className="content">
    <h1>Nyheter</h1>
    {result.map((item, index) => {
     return (
      <div key={index}>
       {/* <Link to={`${item.id}`}>{item.title.rendered}</Link> */}
       {item.content && <p>{parse(item.content.rendered)}</p>}
      </div>
     );
    })}
   </div>
  </>
 );
}
