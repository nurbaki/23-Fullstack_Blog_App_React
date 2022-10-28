import React, { useContext } from "react";
import { registerDjangoUser } from "../helpers/djangobackend";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toastWarnNotify} from "../helpers/ToastNotify";

const Register = () => {
  const { info, setInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const { firstName, lastName, email, password, password2 } = info;

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = `${firstName}_${lastName}`;
    if (password2 === password) {
      registerDjangoUser(username, firstName, lastName, email, password, navigate);    
    }else{
      toastWarnNotify("Password confirmation is not correct.");
    }

  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              // onChange={(e) => setFirstName(e.target.value)}
              onChange={handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter your first name.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              // onChange={(e) => setLastName(e.target.value)}
              onChange={handleChange}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter your last name.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
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
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handleChange}
              type="password"
              name="password2"
              className="form-control"
              placeholder="Confirm your password.."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary form-control">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
