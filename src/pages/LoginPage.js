import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";

export default function LoginPage() {
 const [username, setUserName] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState(null);
 const navigate = useNavigate();

 function handleOnSubmit(e) {
  e.preventDefault();
  const url = `${process.env.REACT_APP_API_URL}jwt-auth/v1/token`;
  const payload = {
   username,
   password,
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
    if (!data?.data?.status) {
     console.log(data);
     const token = data.token;
     localStorage.setItem("exam", token);
     navigate("/news");
    } else if (data.data.status === 403) {
     console.log(data);
     setError(data.code);
    }
   });
 }
 return (
  <div>
   <h1>Login</h1>
   <form onSubmit={handleOnSubmit}>
    <Error message={error} />
    <input
     value={username}
     onChange={(e) => setUserName(e.target.value)}
     type="text"
     placeholder="Username"
    />
    <br />
    <input
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     type="password"
     placeholder="Password"
    />
    <br />
    <button type="submit">Login</button>
   </form>
  </div>
 );
}
