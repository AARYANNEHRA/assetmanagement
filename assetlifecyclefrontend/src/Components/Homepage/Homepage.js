import React, { useState } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Createasset from "../Createasset/Createasset";
import Dashboard from "../Dashboard/Dashboard";
import Report from "../Reportpage/Report";
import Maintenance from "../Maintenance/Maintenance";
function Homepage() {
  const [content, setcontent] = useState("dashboard");
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="navbar">
        <div className="navbar-item-left">
          Asset <br /> Track
        </div>
        <div className="navbar-items">
          <div
            className="navbar-item"
            onClick={() => {
              setcontent("dashboard");
            }}
            style={{ fontWeight: content === "dashboard" ? "bold" : "normal" }}
          >
            Dashboard
          </div>
          <div
            className="navbar-item"
            onClick={() => {
              setcontent("asset management");
            }}
            style={{
              fontWeight: content === "asset management" ? "bold" : "normal",
            }}
          >
            Asset Management
          </div>
          <div
            className="navbar-item"
            onClick={() => {
              setcontent("maintenance");
            }}
            style={{
              fontWeight: content === "maintenance" ? "bold" : "normal",
            }}
          >
            Maintenance
          </div>
          <div
            className="navbar-item"
            onClick={() => {
              setcontent("report");
            }}
            style={{ fontWeight: content === "report" ? "bold" : "normal" }}
          >
            Report
          </div>
        </div>
        <button
          className="button2"
          type="submit"
          onClick={() => {
            window.localStorage.removeItem("isLoggedin");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
      {content === "dashboard" && (
        <>
          <Dashboard />
        </>
      )}
      {content === "asset management" && (
        <>
          <Createasset />
        </>
      )}
      {content === "maintenance" && (
        <>
          <Maintenance />
        </>
      )}
      {content === "report" && (
        <>
          <Report />
        </>
      )}
    </div>
  );
}

export default Homepage;
