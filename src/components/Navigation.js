import React, { useState, useEffect } from "react";
import $ from "jquery";

$(document).ready(function () {
 $(".header__burger").click(function (event) {
  $(".header__burger, .header__menu").toggleClass("active");
  $("body").toggleClass("lock");
 });
});
export default function Navigation() {
 const [menu, setMenu] = useState("");
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
    console.log(data);
    setMenu(data);
   });
 }, []);
 return (
  <div className="wrapper">
   <header className="header">
    <div className="container">
     <div className="header__body">
      {/* <a href="/" className="header__logo">
       <img src={require("../images/logos.png")} alt="logo" />
      </a> */}
      <div className="header__burger">
       <span></span>
      </div>
      <nav className="header__menu">
       <ul className="header__list">
        {menu &&
         menu.map((item, index) => {
          return (
           <li key={index} className="header__item">
            <a href={item.url} className="header__link">
             {item.title.rendered}
            </a>
           </li>
          );
         })}
        <li className="header__item">
         <a href="/login" className="header__link">
          Logout
         </a>
        </li>
       </ul>
      </nav>
     </div>
    </div>
   </header>
  </div>
 );
}
