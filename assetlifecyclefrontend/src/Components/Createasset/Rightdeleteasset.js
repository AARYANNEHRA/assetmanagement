import React, { useState } from "react";
import "./Rightdeleteasset.css";
import axios from "axios";
function Rightdeleteasset() {
  const [serialno, setserialno] = useState("");
  const assetdelete = () => {
    if (serialno) {
      axios
        .delete("https://assetmangement.onrender.com/assetdelete", { data: { serialno } })
        .then((res) => {
          alert(res.data.message);
        });
    } else {
      alert("Enter serial No.");
    }
  };
  return (
    <div className="Rightdeleteasset">
      <div className="right-items">
        <label htmlFor="serialno">
          Serial No. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;
        </label>
        <input
          className="rightinput"
          type="text"
          id="serialno"
          value={serialno}
          onChange={(e) => {
            setserialno(e.target.value);
          }}
        />
      </div>
      <button className="button" onClick={assetdelete}>
        submit
      </button>
    </div>
  );
}

export default Rightdeleteasset;
