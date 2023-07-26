import React from "react";
import "./Sleft.css";
import image from "./signin-image.jpg";
import { useNavigate } from "react-router-dom";
function Sleft() {
  const navigate = useNavigate();
  return (
    <div className="Sleft">
      <img src={image} alt="" />
      <div
        className="navigate"
        onClick={() => {
          navigate("/login");
        }}
      >
        Already have account ?
      </div>
    </div>
  );
}

export default Sleft;
