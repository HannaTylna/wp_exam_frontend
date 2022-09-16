import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

export default function SearchPAge() {
 const [query, setQuery] = useState("");
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
  <>
   <Navigation />
   <div className="content__search">
    <input
     className="search"
     placeholder="Search..."
     onChange={(e) => setQuery(e.target.value.toLowerCase())}
    />
    <ul className="list">
     {result
      .filter((asd) => asd.title.rendered.toLowerCase().includes(query))
      .map((item) => (
       <li className="listItem" key={item.id}>
        <a href={`/filmer/${item.id}`}>{item.title.rendered}</a>
       </li>
      ))}
    </ul>
   </div>
  </>
 );
}
