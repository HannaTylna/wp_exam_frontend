import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function NewsDetail(props) {
 const [newsDetail, setNewsDetail] = useState("");
 const navigate = useNavigate();

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
     setNewsDetail(data);
    });
  }
  fetchData();
 }, [props.id]);

 return (
  <div className="news__content">
   <button onClick={() => navigate(-1)}>Gå tillbaka</button>
   {newsDetail.content && <div>{parse(newsDetail.content.rendered)}</div>}
  </div>
 );
}
