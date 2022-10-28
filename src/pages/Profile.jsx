import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="container w-50 py-5">
      <h1
        className="text-center mb-5 pageHeader"
        style={{ fontFamily: "Girassol" }}
      >
        ─── My Profile ───
      </h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <BsFillPersonFill className="display-5 profileImage" />
          </div>
          <div className="col-md-9 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title"> {currentUser?.user.first_name + " " + currentUser?.user.last_name}</h5>
              <p className="card-text">{currentUser?.user.email}</p>
              <p></p>
              <p className="card-text"></p>
              <p className="card-text">
                {"Username : " + currentUser?.user.username}
              </p>
              <p className="card-text">
                {"First Name : " + currentUser?.user.first_name}
              </p>
              <p className="card-text">
                {"Last Name : " + currentUser?.user.last_name}
              </p>
            </div>
            <div>
              <Link to={"/"} className="card-link ms-3">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
