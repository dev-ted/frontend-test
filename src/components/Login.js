import React, { useState } from "react";
import "../sass/login.scss";
import axios from "../axios/instance";
import requests from "../axios/requests";
import { ThreeBounce } from "better-react-spinkit";
import Snackbars from "../utils/Snackbar";

import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let [message, setMessage] = useState("");
  let [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const userData = {
    email,
    password,
  };

  const Login = (e) => {
    if (!email || !password) return null;
    e.preventDefault();
    setLoading(true);

    axios
      .post(requests.login, userData)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        console.log("user>>>>>", user.data.token);

        dispatch(login(localStorage.setItem("user", JSON.stringify(user))));
        localStorage.setItem("token", user.data.token);
        localStorage.setItem("user_id", user.data.id);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setOpen(true);
        setError(true);
        setMessage("invalid credentials");
        setSeverity("error");
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__upper ">
          <h1>Login</h1>
        </div>
        <div className="login__lower ">
          <form>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder=" email"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />

            <span onClick = {() => alert("will direct to password reset")} className="forget__pass">Forget Password?</span>

            <button onClick={Login}>
              {loading ? <ThreeBounce color="#fff" size={20} /> : "Login"}
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
          <span>
            New user ?  <span className="action" onClick = {() => alert("will direct to sign up")}>Sign Up</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
