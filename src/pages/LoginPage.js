import React, { useState } from "react";

export default function LoginPage() {
 const [username, setUserName] = useState("");
 const [password, setPassword] = useState("");
 function handleOnSubmit(e) {
  e.preventDefault();
  const url = "http://localhost:8888/wordpress/wp-json/jwt-auth/v1/token";
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
    console.log(data);
    const token = data.token;
    localStorage.setItem("exam", token);
   });
 }
 return (
  <div>
   <h1>Login</h1>
   <form onSubmit={handleOnSubmit}>
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
