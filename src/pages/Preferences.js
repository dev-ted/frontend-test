import React, { useEffect, useState } from "react";

import Skeleton from "@material-ui/lab/Skeleton";
import "../sass/profile.scss";

import {
  Avatar,
  Badge,
  Button,
  IconButton,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "../axios/instance";
import requests from "../axios/requests";

import EmptyState from "../utils/EmptyState";
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#16C79A",
    color: "#16C79A",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginLeft: "-10px",
    marginTop: "-10px",
    backgroundColor: "#272727",
  },
}));

function Preferences() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(requests.getUser)
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  const Logout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className="profile">
      {loading ? (
        <Skeleton animation="wave" variant="square" width="100%" height={400} />
      ) : (
        <>
          {profile.length > 0 ? (
            <>
              <div className="avatar">
                <IconButton>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot"
                  >
                    <Avatar className={classes.large}>t</Avatar>
                  </StyledBadge>
                </IconButton>
              </div>
              <div className="info grid">
                <h5>Teddy Dev</h5>
                <small>teddy@email.com</small>
              </div>
              <div className="roles grid">
                <h5>Roles</h5>
                <p>user role</p>
              </div>

              <div className="extra__info grid">
                <div className="items grid">
                  <h5>Permissions</h5>
                  <p>permissions list</p>
                </div>
                <div className="items grid">
                  <h5>Stores</h5>
                  <p>stores list</p>
                </div>
              </div>
              <div className="logout grid">
                <Button
                  onClick={Logout}
                  style={{ backgroundColor: "#272727", color: "#fff" }}
                  variant="outlined"
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <EmptyState
              image="https://i.ibb.co/x873Fj0/No-data-amico.png"
              message="Unable to get profile Data "
              title="Reload"
              onClick={() => window.location.reload()}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Preferences;
