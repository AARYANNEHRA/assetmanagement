import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
function Dashboard() {
  const [count, setcount] = useState(0);
  const [cost, setCost] = useState(0);
  const [CategoryData, setCategoryData] = useState([]);
  const [upcomingmaintenanceassets, setupcomingmaintenanceassets] = useState(
    []
  );
  const [ExpiredMaintenanceAssets, setExpiredMaintenanceAssets] = useState([]);
  useEffect(() => {
    axios.get("https://assetmangement.onrender.com/data").then((res) => {
      setcount(res.data.count);
      setCost(res.data.totalCost);
      setCategoryData(res.data.totalCategory);
      setupcomingmaintenanceassets(res.data.upcomingmaintenanceassets);
      setExpiredMaintenanceAssets(res.data.ExpiredMaintenanceAssets);
    });
  }, []);
  return (
    <div>
      <div className="firstrow">
        <div className="card">Total Assets : {count}</div>
        <div className="card">Total Assets Cost : ₹ {cost}</div>
        <div className="card">
          Upcoming Maintenance Assets : {upcomingmaintenanceassets.length}
        </div>
        <div className="card">
          Expired Maintenance Assets : {ExpiredMaintenanceAssets.length}
        </div>
      </div>
      <div className="secondrow">
        <h2>Assets Diversity:</h2>
        <div className="Asset-table">
          <div className="table1">
            <table className="asset-table">
              <thead>
                <tr>
                  <th className="content">Category</th>
                  <th className="content">Assets</th>
                </tr>
              </thead>
              <tbody>
                {CategoryData.map((category) => (
                  <tr className="table-row" key={category._id}>
                    <td className="content">{category._id}</td>
                    <td className="content"> {category.categoryCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
