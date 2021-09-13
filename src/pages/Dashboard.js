import React, { useState, useEffect } from "react";
import "../sass/dashboard.scss";
import * as IoIcons from "react-icons/io5";
import Card from "../utils/Card";

import { Skeleton } from "@material-ui/lab";
import axios from "../axios/instance";
import requests from "../axios/requests";

import EmptyState from "../utils/EmptyState";
import CardLarge from "../utils/CardLarge";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({});

 

  useEffect(() => {
    setLoading(true);

    axios
      .post(requests.getDashboard)
      .then((response) => {
        
        setDashboardData(
         response?.data
        );
       
       
        setLoading(false);
      })
      .catch((err) => {
        

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
      return () => {
        setDashboardData({});
      }
     
  }, []);
 


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
            {!dashboardData? (
              
             
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
                  active ={dashboardData?.data?.stores.length}
                  number={dashboardData?.data?.active_stores}
                  loyalty={dashboardData?.data?.stores_no_loyalty}
                  voucher={dashboardData?.data?.stores_no_voucher}
                  icon={<IoIcons.IoStorefrontOutline />}
                />
                <Card
                member
                  title=" Members"
                  blocked = {dashboardData?.data?.blocked_members}
                  active ={dashboardData?.data?.active_loyalty_members}
                  number={dashboardData?.data?.total_members}
                  icon={<IoIcons.IoPeopleOutline />}
                />
              
                <Card
                  title="Orders"
                  number={dashboardData?.data?.total_orders}
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
            {!dashboardData ? null : (
              <>
               <CardLarge transactions
            title = "Orders Stats"
            heading1 = "Orders Value"
            value = {dashboardData?.data?.total_order_value}
           
            heading2 = "Average Value "
            
            average = {dashboardData?.data?.avg_order_value}/>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
