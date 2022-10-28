import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutDjangoUser } from "../helpers/djangobackend";
import { AuthContext } from "../contexts/AuthContext";
import Logo from "../assets/reactdjlogo.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser, setBlog, setIsSubmit } = useContext(AuthContext);

  const newblog = () => {
    setBlog({
      title: "",
      image_url: "",
      content: "",
      category: "",
      status: ""
    });
    setIsSubmit("SUBMIT");
    navigate("/newblog");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand text-white myBrand d-flex  align-items-center m-3"
          >
            <img id="Logo" src={Logo} alt="Logo" />
            <h2 className="m-3">Fullstack Blog</h2>
          </Link>

          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser?.user.first_name + " " + currentUser?.user.last_name}
                </h5>
                <button
                  onClick={() => navigate("/about")}
                  className="ms-2 btn btn-outline-light"
                >
                  About
                </button>
                <button
                  onClick={() => navigate("/profile")}
                  className="ms-2 btn btn-outline-light"
                >
                  Profile
                </button>
                <button
                  onClick={newblog}
                  className="ms-2 btn btn-outline-light"
                >
                  New Blog
                </button>
                <button
                  onClick={() => navigate("/myblogs")}
                  className="ms-2 btn btn-outline-light"
                >
                  MyBlogs
                </button>
                <button
                  onClick={() => logoutDjangoUser(navigate, setCurrentUser)}
                  className="ms-2 btn btn-outline-light"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/about")}
                  className="ms-2 btn btn-outline-light"
                >
                  About
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="ms-2 btn btn-outline-light"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="ms-2 btn btn-outline-light"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
