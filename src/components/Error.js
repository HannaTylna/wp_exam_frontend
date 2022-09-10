import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";

export default function Error(props) {
 const [error, setError] = useState("");
 useEffect(() => {
  setError(props.message);
 }, [props.message]);
 return <div>{error ? <Alert severity="error">{error}</Alert> : ""}</div>;
}
