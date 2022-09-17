import React, { useState, useEffect } from "react";
import parser from "html-react-parser";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const StyledButton = styled.button`
 padding: 5px;
 margin-left: 15px;
`;

export default function NewsListPage(props) {
 const [categories, setCategories] = useState([]);
 const [postsByCategory, setPostsByCategory] = useState([]);
 const [pagesByCategory, setPagesByCategory] = useState([]);

 function getCategories() {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/categories`;
  fetch(url, {
   method: "GET",
   headers: {
    "Content-Type": "application/json",
   },
  })
   .then((res) => res.json())
   .then((data) => {
    setCategories(data);
   });
 }

 function getPostByCategory(category) {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/posts?categories=${category.id}`;
  fetch(url, {
   method: "GET",
  })
   .then((res) => res.json())
   .then((data) => {
    setPostsByCategory(data);
   });
 }

 function getPagesByCategory(category) {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/pages?categories=${category.id}`;
  fetch(url, {
   method: "GET",
  })
   .then((res) => res.json())
   .then((data) => {
    setPagesByCategory(data);
   });
 }

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
    setPostsByCategory(data);
   });
 }, []);

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
    setPagesByCategory(data);
   });
 }, []);

 useEffect(() => {
  getCategories();
  // getTags();
 }, []);

 useEffect(() => {
  const url = `${process.env.REACT_APP_API_URL}wp/v2/blocks

  `;
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
   });
 }, []);

 return (
  <>
   <Navigation />
   <div className="content">
    <h1 className="content__header">Home</h1>
    <div>
     <h2>Categories</h2>
     {categories &&
      categories.map((category) => {
       return (
        <StyledButton
         key={category.id}
         onClick={() => {
          getPostByCategory(category);
          getPagesByCategory(category);
         }}>
         {parser(category.name)}
        </StyledButton>
       );
      })}
    </div>

    <div className="cards">
     {postsByCategory.map((item, index) => {
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
    <div className="cards">
     {pagesByCategory.map((item, index) => {
      return (
       <div key={index} className="card">
        <h5 className="card-title">{item.title.rendered}</h5>
        <a href={`/filmer/${item.id}`} className="card-link">
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
