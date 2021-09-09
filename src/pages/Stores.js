import React, { useState } from "react";
import StoreCard from "../components/StoreCard";

import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@material-ui/core";
import EmptyState from "../utils/EmptyState";
import { useHistory } from "react-router";
import Skeleton from "@material-ui/lab/Skeleton";

function Stores() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  const data = [
    {
      strore: "hello store",
      id: "1",
    },
  ];

  return (
    <div className="page">
      {data.length > 0 ? (
        <>
          <div className="__top">
            <form >
              <span>
                <AiOutlineSearch />
              </span>
              <input type="search" placeholder="Search for store" />
              <button>Search</button>
            </form>

            <div className="add__storre">
              <Button  onClick={() => history.push("/newstore")}>+New Store</Button>
            </div>
          </div>
          <div className="_container">
            {!loading ? (
                <>
              <Skeleton variant="rect" width={400} height={150} />
              <Skeleton variant="rect" width={400} height={150} />
              <Skeleton variant="rect" width={400} height={150} />
              </>
            ) : (
              <>
                <StoreCard />
                <StoreCard />
                <StoreCard />
              </>
            )}
          </div>
        </>
      ) : (
        <EmptyState
          image="https://i.ibb.co/4McmSGm/undraw-Add-files-re-v09g.png"
          message="You currently have no stores"
          title="+ New store"
          onClick={() => history.push("/newstore")}
        />
      )}
    </div>
  );
}

export default Stores;
