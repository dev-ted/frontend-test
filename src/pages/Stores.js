import React, { useEffect, useState } from "react";
import StoreCard from "../components/StoreCard";

import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@material-ui/core";
import EmptyState from "../utils/EmptyState";
import { useHistory } from "react-router";
import Skeleton from "@material-ui/lab/Skeleton";
import requests from "../axios/requests";
import axios from "../axios/instance";

function Stores() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [stores, setStores] = useState([]);

  setTimeout(() => {
    setLoading(true);
  }, 1000);


  useEffect(() => {
    setLoading(true);

    axios
      .get(requests.getStores)
      .then((response) => {
        console.log(response?.data);
        setStores(
         response?.data
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);

        setTimeout(() => {
          
          setLoading(false);
         
          
        }, 2000);
        
      });
  }, []);

  return (
    <div className="page">

      {error ? (
           <EmptyState
           className ="empty_state"
           image="https://i.ibb.co/x873Fj0/No-data-amico.png"
           message="Unable to get stores Data "
           title="Reload"
           onClick={() => window.location.reload()}
         />
      ) : (
        <>
         {stores.length > 0 ? (
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
            {loading ? (
                <>
              <Skeleton variant="rect" width={400} height={150} />
              <Skeleton variant="rect" width={400} height={150} />
              <Skeleton variant="rect" width={400} height={150} />
              </>
            ) : (
              <>
              {stores.map((store) => (
                <StoreCard  store={store} />
              ))}
             
              </>
            )}
          </div>
        </>
      ) : (
        <EmptyState
          image="https://i.ibb.co/4McmSGm/undraw-Add-files-re-v09g.png"
          message="No stores Found"
          title="+ New store"
          onClick={() => history.push("/newstore")}
        />
      )}

        </>
      )}


     
    </div>
  );
}

export default Stores;
