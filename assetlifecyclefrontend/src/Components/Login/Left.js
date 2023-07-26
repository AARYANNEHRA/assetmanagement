import React from "react";
import "./Left.css";
import image from "./signin-image.jpg";
import { useNavigate } from "react-router-dom";
function Left() {
  const navigate = useNavigate();
  return (
    <div className="Left">
      <img src={image} alt="" />
      <div
        className="navigate"
        onClick={() => {
          navigate("/register");
        }}
      >
        Create a new account ?
      </div>
    </div>
  );
}

export default Left;
