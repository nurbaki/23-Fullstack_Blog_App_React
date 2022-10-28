import React, { useState, useContext } from "react";
import { loginDjangoUser } from "../helpers/djangobackend";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify, toastSuccessNotify } from "../helpers/ToastNotify";


const Login = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = info;

  const forgotPassword = (email) => {
    toastWarnNotify("This function is not currently used.");
    toastSuccessNotify("Thank you for your understanding");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginDjangoUser(email, password, navigate, setCurrentUser)
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password.."
              required
            />
          </div>
          <div className="link" onClick={() => forgotPassword(email)}>
            Forgot Password
          </div>
          <button type="submit" className="btn btn-primary form-control">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
