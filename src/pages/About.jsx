import React from "react";
import { Link } from "react-router-dom";
import MyPhoto from "../assets/linkedin.jpg";

const About = () => {
  return (
    <div className="container py-5">
      <h1
        className="text-center mb-5 pageHeader"
        style={{ fontFamily: "Girassol" }}
      >
        ─── About ───
      </h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={MyPhoto}
              className="img-fluid rounded-start"
              alt="Profile Image"
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h4 className="card-title text-center">
                Welcome To My Capstone Project
              </h4>
              <p className="card-text">Hello,</p>
              <p className="card-text">my name is Nurbaki Bayansal.</p>
              <p className="card-text text-justify">
                I developed this blog application as the Capstone Project of the
                Full Stack Developer training. I made both the Frontend and Backend side of this project myself.
              </p>
              <p className="card-text text-justify">
                In this project, I developed a database
                using SQLite with the help of <span className="about">Python Django</span>. I generated API addresses
                from this database with the <span className="about">REST API</span>  framework. I created blog pages by
                pulling data in <span className="about">REACT</span> components from these API addresses that I will
                use on the Frontend side.
                </p>
              <p className="card-text">
                In addition to these, in the development of the project
                I also benefited from; <br />
                - <span className="about">Bootstrap</span>,<br />
                - <span className="about">React Toastify</span>,<br />
                - <span className="about">Swagger</span><br />
              </p>
              <p className="card-text">
                Some of the functions and React hooks I used while developing the project are as follows;<br />
                - Fetch Methods,<br />
                - useState, useEffect, useContext. 
              </p>
              <p className="card-text">Thank you for visit.</p>
            </div>
            <div className="ms-3">
            <a href="https://github.com/nurbaki" target="_blank">
                  My Github Page
                </a><br /><br />
                <Link to={"/"} className="card-link">
                  Go Back
                </Link><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
