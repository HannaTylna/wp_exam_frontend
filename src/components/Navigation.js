import React, { useState, useEffect } from "react";
import $ from "jquery";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

$(document).ready(function () {
 $(".header__burger").click(function (event) {
  $(".header__burger, .header__menu").toggleClass("active");
  $("body").toggleClass("lock");
 });
});

export default function Navigation() {
 const [menu, setMenu] = useState("");
 const navigate = useNavigate();
 useEffect(() => {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/menu-items?menus=3`;
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
    setMenu(data);
   });
 }, []);
 function handleonClick() {
  localStorage.removeItem("exam");
  navigate("/");
  window.location.reload();
 }
 return (
  <div className="wrapper">
   <header className="header">
    <div className="container">
     <div className="header__body">
      <div className="header__burger">
       <span></span>
      </div>
      <nav className="header__menu">
       <ul className="header__list">
        {menu &&
         menu.map((item, index) => {
          return (
           <li key={index} className="header__item">
            <a href={`/${item.title.rendered}`} className="header__link">
             {item.title.rendered}
            </a>
           </li>
          );
         })}
        <li className="header__item">
         <a href={"/search"} className="header__link">
          Search
         </a>
        </li>
        <li className="header__item">
         <button type="submit" onClick={handleonClick}>
          Logout
         </button>
        </li>
       </ul>
      </nav>
     </div>
    </div>
   </header>
  </div>
 );
}
