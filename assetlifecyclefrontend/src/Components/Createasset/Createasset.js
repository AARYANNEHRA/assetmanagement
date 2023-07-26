import React, { useState } from "react";
import "./Createasset.css";
import Rightcreateasset from "./Rightcreateasset";
import Rightdeleteasset from "./Rightdeleteasset";
import Righteditasset from "./Righteditasset";
import Rightviewasset from "./Rightviewasset";
function Createasset() {
  const [assetmanagement, setassetmanagement] = useState("");
  return (
    <div className="Createasset">
      <div className="assetleft">
        <div className="left-itmes">
          <div
            className="left-item"
            onClick={() => {
              setassetmanagement("Create asset");
            }}
            style={{
              fontWeight:
                assetmanagement === "Create asset" ? "bold" : "normal",
            }}
          >
            Create asset
          </div>
          <div
            className="left-item"
            onClick={() => {
              setassetmanagement("View asset");
            }}
            style={{
              fontWeight: assetmanagement === "View asset" ? "bold" : "normal",
            }}
          >
            View asset
          </div>
          <div
            className="left-item"
            onClick={() => {
              setassetmanagement("Edit asset");
            }}
            style={{
              fontWeight: assetmanagement === "Edit asset" ? "bold" : "normal",
            }}
          >
            Edit asset
          </div>
          <div
            className="left-item"
            onClick={() => {
              setassetmanagement("Delete asset");
            }}
            style={{
              fontWeight:
                assetmanagement === "Delete asset" ? "bold" : "normal",
            }}
          >
            Delete asset
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="assetright">
        {assetmanagement === "Create asset" && (
          <>
            <Rightcreateasset />
          </>
        )}
        {assetmanagement === "Delete asset" && (
          <>
            <Rightdeleteasset />
          </>
        )}
        {assetmanagement === "View asset" && (
          <>
            <Rightviewasset />
          </>
        )}
        {assetmanagement === "Edit asset" && (
          <>
            <Righteditasset />
          </>
        )}
      </div>
    </div>
  );
}

export default Createasset;
