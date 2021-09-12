import React, { useState } from "react";
import { useHistory } from "react-router";
import Snackbars from "../utils/Snackbar";
import axios from "../axios/instance";
import requests from "../axios/requests";
import { ThreeBounce } from "better-react-spinkit";
import "../sass/global.scss";

function AddStore() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");

  let [message, setMessage] = useState("");
  let [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);

  const storeData = {
    name,
    address,
    code,
  };

  const add = (e) => {
    if(!name || !address || !code) return null;
    e.preventDefault();
    setLoading(true);
    axios
      .post(requests.addStore, storeData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        history.push("/stores");
      })
      .catch((err) => {
        setLoading(false);
        setOpen(true);
        setError(true);
        setMessage("could not add store");
        setSeverity("error");
        console.log(err);
      });
  };
  return (
    <div className="page ">
      <form className="grid _form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Store name"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Store address"
          required
        />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Store code"
          required
        />

        <button onClick={add}>
          {loading ? <ThreeBounce color="#fff" size={20} /> : "Add store"}
        </button>
      </form>

      {error && (
        <Snackbars
          onClose={() => setOpen(false)}
          open={open}
          message={message}
          severity={severity}
        />
      )}
    </div>
  );
}

export default AddStore;
