import axios from "axios";
import React, { useEffect, useState } from "react";
import Assetcard from "../Assetcard/Assetcard";
import "./Maintenance.css";
function Maintenance() {
  const [upcomingmaintenanceassets, setupcomingmaintenanceassets] = useState(
    []
  );
  const [ExpiredMaintenanceAssets, setExpiredMaintenanceAssets] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/maintenance").then((res) => {
      setupcomingmaintenanceassets(res.data.upcomingmaintenanceassets);
      setExpiredMaintenanceAssets(res.data.ExpiredMaintenanceAssets);
    });
  }, []);
  return (
    <div>
      <div className="upperdiv">
        <div className="innerdiv">
          <h2>Upcoming Maintenance</h2>
          {upcomingmaintenanceassets.map((upcoming) => (
            <Assetcard asset={upcoming} />
          ))}
        </div>
        <div className="innerdiv">
          <h2>Expired Maintenance</h2>
          {ExpiredMaintenanceAssets.map((expire) => (
            <Assetcard asset={expire} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
