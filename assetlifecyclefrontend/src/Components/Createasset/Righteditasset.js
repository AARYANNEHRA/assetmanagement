import React, { useState } from "react";
import "./Righteditasset.css";
import axios from "axios";
function Righteditasset() {
  const [serialno, setserialno] = useState("");
  const [maintenancedate, setmaintenancedate] = useState("");
  const editasset = () => {
    if (serialno && maintenancedate) {
      axios
        .put("https://assetmangement.onrender.com/assetedit", { serialno, maintenancedate })
        .then((res) => {
          alert(res.data.message);
        });
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div className="Righteditasset">
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
      <div className="right-items">
        <label htmlFor="maintenancedate">
          Maintenance Date : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </label>
        <input
          className="rightinput"
          type="date"
          id="maintenancedate"
          value={maintenancedate}
          onChange={(e) => {
            setmaintenancedate(e.target.value);
          }}
        />
      </div>
      <button className="button" onClick={editasset}>
        submit
      </button>
    </div>
  );
}

export default Righteditasset;
