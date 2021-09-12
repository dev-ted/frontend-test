import React, { useState } from "react";
import "../sass/login.scss";
import axios from "../axios/instance";
import requests from "../axios/requests";
import { ThreeBounce } from "better-react-spinkit";
import Snackbars from "../utils/Snackbar";
import { IconButton } from "@material-ui/core";
import { IoArrowBackOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reset, setReset] = useState(false);
  let [message, setMessage] = useState("");
  let [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const userData = {
    email,
    password,
  };

  // const Login = (e) => {
  //   if (!email || !password) return null;
  //   e.preventDefault();
  //   setLoading(true);

  //   axios
  //     .post(requests.login, userData)
  //     .then((res) => {
  //       console.log(res.data);
  //       localStorage.setItem("token", res.data.token);
  //       dispatch(
  //         login(localStorage.setItem('user', JSON.stringify(res.data)))
  //       );
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setOpen(true);
  //       setError(true);
  //       setMessage("invalid credentials");
  //       setSeverity("error");
  //       console.log(err);
  //     });
  // };

  const SignIn = (e) => {
    if (!email || !password) return null;
    e.preventDefault();
    setLoading(true);

    
    dispatch(
      login(localStorage.setItem('user', JSON.stringify(userData)))
    );
  };
  const SignUp = (e) => {
    if (!email || !password) return null;
    e.preventDefault();
    setLoading(true);

    axios
      .post(requests.signup, userData)
      .then((res) => {
        console.log(res.data);
        dispatch(login(res.data))
        setLoading(false);

      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setOpen(true);
        setError(true);
        setMessage(err.message);
        setSeverity("error");
      });
  };
  const Reset = (e) => {
    if (!email || !password) return null;
    e.preventDefault();
    setLoading(true);

    axios
      .post(requests.resetPassword, userData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setReset(!reset);
      })
      .catch((err) => {
        setLoading(false);
        setOpen(true);
        setError(true);
        setMessage("Email address not found in our database");
        setSeverity("error");
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__upper ">
          <h1>
            {" "}
            {reset ? (
              <IconContext.Provider value={{ color: "#16C79A" }}>
                <span className="menu__icon">
                  <IconButton onClick={() => setReset(!reset)}>
                    <IoArrowBackOutline />
                  </IconButton>
                </span>
              </IconContext.Provider>
            ) : !isSignUp ? (
              "Login"
            ) : (
              "Sign up"
            )}{" "}
          </h1>
          {!reset && <h6>To access your dashboard</h6>}
        </div>
        <div className="login__lower ">
          {reset ? (
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
                placeholder="New Password"
                required
              />

              <button onClick={Reset}>
                {loading ? <ThreeBounce color="#fff" size={20} /> : "Reset"}
              </button>
            </form>
          ) : (
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
              {!isSignUp && (
                <span className="forget__pass" onClick={() => setReset(!reset)}>
                  Forget Password?
                </span>
              )}
              {!isSignUp ? (
                <button onClick={SignIn}>
                  {loading ? <ThreeBounce color="#fff" size={20} /> : "Login"}
                </button>
              ) : (
                <button onClick={SignUp}>
                  {loading ? <ThreeBounce color="#fff" size={20} /> : "Sign Up"}
                </button>
              )}
            </form>
          )}

          {error && (
            <Snackbars onClose={() => setOpen(false)} open={open} message={message} severity={severity} />
          )}

          {reset ? null : !isSignUp ? (
            <span>
              New user ?{" "}
              <span onClick={() => setIsSignUp(true)} className="action">
                Sign Up
              </span>
            </span>
          ) : (
            <span>
              Already a user ?{" "}
              <span onClick={() => setIsSignUp(!true)} className="action">
                Login
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
