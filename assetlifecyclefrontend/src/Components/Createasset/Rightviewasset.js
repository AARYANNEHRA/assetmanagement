import React, { useState } from "react";
import "./Rightviewasset.css";
import axios from "axios";
import Assetcard from "../Assetcard/Assetcard";
function Rightviewasset() {
  const [serialno, setserialno] = useState("");
  const [asset, setasset] = useState({});
  const assetview = () => {
    if (serialno) {
      axios
        .post("https://assetmangement.onrender.com/viewasset", { serialno })
        .then((res) => {
          if (res.data.existviewasset) {
            setasset(res.data.existviewasset);
            console.log(asset);
          } else {
            alert(res.data.message);
          }
        });
    } else {
      alert("Enter Serial No.");
    }
  };
  return (
    <>
      <div className="Rightviewasset">
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
        <button className="button" onClick={assetview}>
          submit
        </button>
      </div>
      {asset.AssetName && (
        <>
          <Assetcard asset={asset} />
        </>
      )}
    </>
  );
}

export default Rightviewasset;
