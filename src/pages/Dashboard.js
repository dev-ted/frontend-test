import React, { useState } from "react";
import "../sass/dashboard.scss";
import * as IoIcons from "react-icons/io5";
import Card from "../utils/Card";
import Panel from "../components/Panel";
import { Skeleton } from "@material-ui/lab";

function Dashboard() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  return (
    <div className="dashboard">
      <div className="dashboard__top">
        {!loading ? (
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
            <Card
              store
              title="Stores"
              number={1200000000}
              icon={<IoIcons.IoStorefrontOutline />}
            />
            <Card
              title=" Members"
              number={100}
              icon={<IoIcons.IoPeopleOutline />}
            />
            <Card
              title="Orders"
              number={100}
              icon={<IoIcons.IoCartOutline />}
            />
          </>
        )}
      </div>
      <div className="dashboard__middle">
        {!loading ? (
          <>
            <Skeleton
              animation="wave"
              variant="rect"
              width="100%"
              height={60}
            />
            <div style={{display: 'flex', marginTop: '20px' , gap: '20px'}}>
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
           
            <Panel />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
