import React from "react";
import "./Assetcard.css";
function Assetcard({ asset }) {
  console.log(asset);
  return (
    <div className="Assetcard">
      <div className="first-row">
        <div className="first-row-items">Name : {asset.AssetName}</div>
        <div className="first-row-items">serialNo : {asset.SerialNo}</div>
        <div className="first-row-items">cost : {asset.Cost}</div>
        <div className="first-row-items">category : {asset.Category}</div>
      </div>
      <div className="second-row">
        <div className="second-row-items">
          Purchase Date : {asset.PurchaseDate.slice(0, 10)}
        </div>
        <div className="second-row-items">
          Maintenance Date : {asset.MaintenanceDate.slice(0, 10)}
        </div>
        <div className="second-row-items">
          Warranty : {asset.Warranty.slice(0, 10)}
        </div>
      </div>
      <div className="third-row">Description : {asset.Description}</div>
    </div>
  );
}

export default Assetcard;
