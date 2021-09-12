import React, { useState } from "react";
import { useHistory } from "react-router";
import Snackbars from "../utils/Snackbar";
import axios from "../axios/instance";
import requests from "../axios/requests";
import { ThreeBounce } from "better-react-spinkit";

function AddMember() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  let [message, setMessage] = useState("");
  let [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  

  const memberData = {
    name,
    surname,
    phone,
    dob,
    gender,
  };

  const add = (e) => {

    if(!name || !surname || !phone || !dob | !gender) return null;
      e.preventDefault();
    setLoading(true);
    axios
      .post(requests.addMember, memberData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        history.push("/members");
      })
      .catch((err) => {
        setLoading(false);
        setOpen(true);
        setError(true);
        setMessage("could not add member");
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
          placeholder="first name"
          required
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="last name"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{10}"
          placeholder="phone number"
          required
        />
        <input
          type="date"
          placeholder="date of birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <select required>
          <option onChange={(e) => setGender(e.target.value)} required>
            Gender
          </option>
          <option value={gender}>Male</option>git
          <option value={gender}>Femaile</option>
          <option value={gender}>Binary</option>
        </select>

        <button onClick={add}>{loading ? <ThreeBounce color="#fff" size={20} />  : "Add Member"}</button>
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

export default AddMember;
