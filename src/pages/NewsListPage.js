import React, { useState, useEffect } from "react";
// import parse from "html-react-parser";
import Navigation from "../components/Navigation";

export default function NewsListPage(props) {
 const [result, setResult] = useState([]);
 useEffect(() => {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/posts`;
  const token = localStorage.getItem("exam");

  fetch(url, {
   method: "GET",
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
  })
   .then((res) => res.json())
   .then((data) => {
    setResult(data);
   });
 }, []);
 return (
  <>
   <Navigation />
   <div className="content">
    <h1 className="content__header">Nyheter</h1>
    <div className="cards">
     {result.map((item, index) => {
      return (
       <div key={index} className="card">
        <h5 className="card-title">{item.title.rendered}</h5>
        <a href={`/${item.id}`} className="card-link">
         Mer...
        </a>
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
}
