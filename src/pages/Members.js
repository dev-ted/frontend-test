import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Skeleton from "@material-ui/lab/Skeleton";
import EmptyState from "../utils/EmptyState";

import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@material-ui/core";
import MemberCard from "../components/MemberCard";
import axios from "../axios/instance";
import requests from "../axios/requests";
import TransitionsModal from "../components/Modal";

function Members() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(requests.getDashboard)
      .then((response) => {
        console.log(response?.data);
        setMembers(response?.data);
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
  console.log(members);

  return (
    <div className="page">
      {error ? (
        <EmptyState
          image="https://i.ibb.co/x873Fj0/No-data-amico.png"
          message="Unable to get members Data "
          title="Reload"
          onClick={() => window.location.reload()}
        />
      ) : (
        <>
          {members.length > 0 ? (
            <>
              <div className="__top">
                <form>
                  <span>
                    <AiOutlineSearch />
                  </span>
                  <input type="search" placeholder="Search for members" />
                  <button>Search</button>
                </form>

                <div className="add__storre">
                  <Button onClick={() => history.push("/new-member")}>
                    +New member
                  </Button>
                 <TransitionsModal />
                </div>
              </div>
              <div className="_container">
                {!loading ? (
                  <>
                    <Skeleton
                      animation="wave"
                      variant="square"
                      width={350}
                      height={400}
                    />

                    <Skeleton
                      animation="wave"
                      variant="square"
                      width={350}
                      height={400}
                    />
                    <Skeleton
                      animation="wave"
                      variant="square"
                      width={350}
                      height={400}
                    />
                  </>
                ) : (
                  <>
                    {members?.map((member) => (
                      <MemberCard member={member} />
                    ))}
                  </>
                )}
              </div>
            </>
          ) : (
            <EmptyState
              image="https://i.ibb.co/4McmSGm/undraw-Add-files-re-v09g.png"
              message=" No Loyalty Members  found"
              title="+ New Member"
              onClick={() => history.push("/new-member")}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Members;
