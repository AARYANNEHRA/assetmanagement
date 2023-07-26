import React, { useState } from "react";
import "./Rightcreateasset.css";
import axios from "axios";
function Rightcreateasset() {
  const [assetname, setassetname] = useState("");
  const [serialno, setserialno] = useState("");
  const [purchasedate, setpurchasedate] = useState("");
  const [category, setcategory] = useState("Computer");
  const [Cost, setCost] = useState("");
  const [warranty, setwarranty] = useState("");
  const [maintenancedate, setmaintenancedate] = useState("");
  const [description, setdescription] = useState("");
  const saveasset = () => {
    const assetdetails = {
      assetname,
      serialno,
      purchasedate,
      category,
      Cost,
      warranty,
      maintenancedate,
      description,
    };
    if (
      assetname &&
      serialno &&
      purchasedate &&
      category &&
      Cost &&
      warranty &&
      maintenancedate &&
      description
    ) {
      axios
        .post("http://localhost:9002/saveasset", assetdetails)
        .then((res) => {
          alert(res.data.message);
        });
    } else {
      alert("Invalid input");
    }
  };
  return (
    <div className="Rightcreateasset">
      <div className="right-items">
        <label htmlFor="assetname">
          Asset Name : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </label>
        <input
          className="rightinput"
          type="text"
          id="assetname"
          value={assetname}
          onChange={(e) => {
            setassetname(e.target.value);
          }}
        />
      </div>
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
        <label htmlFor="purchaseDate">
          Purchase Date : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </label>
        <input
          className="rightinput"
          type="date"
          id="purchaseDate"
          value={purchasedate}
          onChange={(e) => {
            setpurchasedate(e.target.value);
          }}
        />
      </div>
      <div className="right-items">
        <label htmlFor="category">
          Category : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;
        </label>
        <select
          className="rightinput"
          id="category"
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        >
          <option value="Computer">Computer</option>
          <option value="Machinery">Machinery</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>
      <div className="right-items">
        <label htmlFor="Cost">
          Cost : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </label>
        <input
          className="rightinput"
          type="number"
          id="Cost"
          value={Cost}
          onChange={(e) => {
            setCost(e.target.value);
          }}
        />
      </div>
      <div className="right-items">
        <label htmlFor="maintenance-date">
          Next maintenance : &nbsp; &nbsp; &nbsp;
        </label>
        <input
          className="rightinput"
          type="date"
          id="maintenance-date"
          value={maintenancedate}
          onChange={(e) => {
            setmaintenancedate(e.target.value);
          }}
        />
      </div>
      <div className="right-items">
        <label htmlFor="warranty">
          Warranty : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;
        </label>
        <input
          className="rightinput"
          type="date"
          id="warranty"
          value={warranty}
          onChange={(e) => {
            setwarranty(e.target.value);
          }}
        />
      </div>
      <div className="right-items">
        <textarea
          id="description"
          cols="60"
          rows="5"
          placeholder="Short description about asset"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
      </div>
      <button className="button" onClick={saveasset}>
        submit
      </button>
    </div>
  );
}

export default Rightcreateasset;
