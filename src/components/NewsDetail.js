import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

export default function NewsDetail(props) {
 const [newsDetail, setNewsDetail] = useState("");

 useEffect(() => {
  function fetchData() {
   const url = `${process.env.REACT_APP_API_URL}wp/v2/posts/${props.id}`;
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
     setNewsDetail(data);
    });
  }
  fetchData();
 }, [props.id]);
 return (
  <div className="news__content">
   <a href="/news" border="none">
    <img
     alt="A back arrow"
     src="https://img.icons8.com/ios-filled/50/4a90e2/left2.png"
    />
   </a>
   {newsDetail.content && <div>{parse(newsDetail.content.rendered)}</div>}
  </div>
 );
}
