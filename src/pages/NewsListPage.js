import React from "react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import Navigation from "../components/Navigation";

export default function NewsListPage() {
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
    <h1 className="content__header">Nyheter</h1>
    <div className="cards">
     {result.map((item, index) => {
      return (
       <div key={index} className="card">
        <h5 className="card-title">{item.title.rendered}</h5>
        <a href={`http://localhost:3000/${item.id}`} className="card-link">
         Mer...
        </a>
       </div>
      );
      //   return (
      //    <div key={index} className="card">
      //     {/* <Link to={`${item.id}`}>{item.title.rendered}</Link> */}
      //     {item.content && <p>{parse(item.content.rendered)}</p>}
      //    </div>
      //   );
     })}
    </div>
   </div>
  </>
 );
}