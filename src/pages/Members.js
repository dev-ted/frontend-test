import React, { useState } from "react";
import { useHistory } from "react-router";
import Skeleton from "@material-ui/lab/Skeleton";
import EmptyState from "../utils/EmptyState";

import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@material-ui/core";
import MemberCard from "../components/MemberCard";

function Members() {
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
            <form action="">
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
                <MemberCard />
                <MemberCard />
                <MemberCard />
              </>
            )}
          </div>
        </>
      ) : (
        <EmptyState
          image="https://i.ibb.co/4McmSGm/undraw-Add-files-re-v09g.png"
          message="You currently have no Members"
          title="+ New Member"
          onClick={() => history.push("/new-member")}
        />
      )}
    </div>
  );
}

export default Members;
