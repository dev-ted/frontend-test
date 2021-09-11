import React, { useState, useEffect } from "react";
import "../sass/dashboard.scss";
import * as IoIcons from "react-icons/io5";
import Card from "../utils/Card";
import Panel from "../components/Panel";
import { Skeleton } from "@material-ui/lab";
import axios from "../axios/instance";
import requests from "../axios/requests";

import EmptyState from "../utils/EmptyState";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);

  // setTimeout(() => {
  //   setLoading(true);
  // }, 1000);

  useEffect(() => {
    setLoading(true);

    axios
      .get(requests.getDashboard)
      .then((response) => {
        console.log(response?.data);
        setDashboardData(
         response.data()
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);
  console.log(dashboardData);

  return (
    <div className="dashboard">
      <div className="dashboard__top">
        {loading ? (
          <>
            <Skeleton
              animation="wave"
              variant="rect"
              width={500}
              height={200}
            />  

            <Skeleton
              animation="wave"
              variant="rect"
              width={500}
              height={200}
            />
            <Skeleton
              animation="wave"
              variant="rect"
              width={500}
              height={200}
            />
          </>
        ) : (
          <>
            {!dashboardData.length > 0 ? (
             
                <EmptyState
                  image="https://i.ibb.co/x873Fj0/No-data-amico.png"
                  message="Unable to get Dashboard Data "
                  title="Reload"
                  onClick={() => window.location.reload()}
                />
              
            ) : (
              <>
                <Card
                  store
                  title="Stores"
                  number={dashboardData.stores.total}
                  icon={<IoIcons.IoStorefrontOutline />}
                />
                <Card
                  title=" Members"
                  number={dashboardData.members.total}
                  icon={<IoIcons.IoPeopleOutline />}
                />
                <Card
                  title="Orders"
                  number={dashboardData.orders.total}
                  icon={<IoIcons.IoCartOutline />}
                />
              </>
            )}
          </>
        )}
      </div>
      <div className="dashboard__middle">
        {loading ? (
          <>
            <Skeleton
              animation="wave"
              variant="rect"
              width="100%"
              height={60}
            />
            <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
              <Skeleton
                animation="wave"
                variant="circle"
                width={200}
                height={200}
              />
              <Skeleton
                animation="wave"
                variant="circle"
                width={200}
                height={200}
              />
            </div>
          </>
        ) : (
          <>
            {!dashboardData.length > 0 ? null : (
              <>
                <Panel dashboardData = {dashboardData} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
