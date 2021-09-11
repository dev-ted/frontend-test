import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ThreeBounce } from "better-react-spinkit";
import { Button } from "@material-ui/core";
import requests from "../axios/requests";
import "../sass/global.scss";
import axios from "../axios/instance";
import Snackbars from "../utils/Snackbar";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(10),
  },
}));

export default function TransitionsModal() {
    const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [points, setPoints] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let [message, setMessage] = useState("");
  let [severity, setSeverity] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const data = {
    points,
    phone,
}
  const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
      .post(requests.assignPoints, data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        history.push("/members");
      })
      .catch((err) => {
        setLoading(false);
        setOpenSnack(true);
        setError(true);
        setMessage("could not assign points");
        setSeverity("error");
        console.log(err);
      });

      
  }

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Assign Points
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Assign Points</h2>
            <form className = "grid _form">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}"
                placeholder="phone number"
                required
              />
              <input
                type="number"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                placeholder="points"
                required
              />
              <button onClick={handleSubmit}>
                {loading ? (
                  <ThreeBounce color="#fff" size={20} />
                ) : (
                  "Assign Points"
                )}
              </button>
            </form>
            {error && (
        <Snackbars
          onClose={() => setOpenSnack(false)}
          open={openSnack}
          message={message}
          severity={severity}
        />
      )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
