/* eslint-disable array-callback-return */
import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

export default function FilmListPage() {
 const [result, setResult] = useState([]);

 useEffect(() => {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/pages`;
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
    console.log(data);
    setResult(data);
   });
 }, []);
 return (
  <div>
   <Navigation />
   <div className="films__content">
    <h1>Filmer</h1>
    <div className="cards">
     {result.map((item, index) => {
      if (item.parent === 10) {
       return (
        <div key={index} className="card">
         <h5 className="card-title">{item.title.rendered}</h5>
         <a href={`/filmer/${item.id}`} className="card-link">
          Mer...
         </a>
        </div>
       );
      }
     })}
    </div>
   </div>
  </div>
 );
}
