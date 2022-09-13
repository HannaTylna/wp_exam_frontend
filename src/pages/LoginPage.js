import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeader1 = styled.h1`
 margin-top: 100px;
 text-align: center;
 font-weight: bold;
`;

const StyledLink = styled.a`
 text-decoration: none;
 color: #808080;
 &:hover {
  background: #fff;
  color: #d0312d;
  border-bottom: 3px dashed #d0312d;
 }
`;

const StyledButton = styled.button`
 margin: 0 auto;
 padding: 10px;
 font-size: 24px;
 text-transform: uppercase;
 font-weight: bold;
 border: 3px solid #000;
 &:hover {
  border: 3px solid #d0312d;
 }
`;
const StyledDiv = styled.div`
 text-align: center;
`;

export default function LoginPage() {
 const navigate = useNavigate();

 function handleOnSubmit(e) {
  e.preventDefault();
  const url = `${process.env.REACT_APP_API_URL}jwt-auth/v1/token`;
  const payload = {
   username: `${process.env.REACT_APP_API_USERNAME}`,
   password: `${process.env.REACT_APP_API_PASSWORD}`,
  };

  fetch(url, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(payload),
  })
   .then((res) => res.json())
   .then((data) => {
    const token = data.token;
    console.log(token);
    console.log(url);
    localStorage.setItem("exam", token);
    navigate("/home");
   });
 }
 return (
  <div>
   <StyledHeader1>
    Welcome to Filmstaden-clone! <br />
    This website was created using React (frontend part) and Wordpress (Backend
    part). <br /> More information here:
    <br />
    <StyledLink
     href="https://github.com/HannaTylna/wp_exam_frontend"
     target="_blank"
     rel="noreferrer">
     Github repository
    </StyledLink>
   </StyledHeader1>
   <br />
   <StyledDiv>
    <StyledButton onClick={handleOnSubmit} type="submit">
     Get started!
    </StyledButton>
   </StyledDiv>
  </div>
 );
}
