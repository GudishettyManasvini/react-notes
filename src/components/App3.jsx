import React from "react";
import Box from "./Box";
export default function App3() {
  return (
    <div>
      <h1 style={{color:"black"}}>App3</h1>
      <h2>Conditional Rendering</h2>
      <Box flag={2} />
    </div>
  );
}