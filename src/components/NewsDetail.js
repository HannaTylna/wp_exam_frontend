import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
 display: flex;
`;

export default function NewsDetail(props) {
 const [newsDetail, setNewsDetail] = useState("");
 const [comments, setComments] = useState([]);
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

 useEffect(() => {
  function fetchData() {
   const url = `${process.env.REACT_APP_API_URL}wp/v2/comments?posts${props.id}`;
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
     setComments(data);
    });
  }
  fetchData();
 }, [props.id]);
 return (
  <div className="news__content">
   <button onClick={() => navigate(-1)}>Gå tillbaka</button>
   {newsDetail.content && <div>{parse(newsDetail.content.rendered)}</div>}
   <h3>Comments</h3>
   {comments &&
    comments.map((comment) => {
     return (
      <StyledDiv key={comment.id}>
       <h4>{comment.author_name}</h4>
       <p>{parse(comment.content.rendered)}</p>
      </StyledDiv>
     );
    })}
  </div>
 );
}
