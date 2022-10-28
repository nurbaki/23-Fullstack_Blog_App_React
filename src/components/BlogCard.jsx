import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { BsChatLeftDots, BsFillHeartFill, BsFillEyeFill } from "react-icons/bs";


const BlogCard = ({
  category,
  category_name,
  title,
  image_url,
  content,
  user,
  status,
  id,
  like,
  comment,
  views,
  last_updated,
  publish_date,
}) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const prettyPublishDate= new Date(publish_date).toLocaleDateString("de-DE"); 

  return (
    <div className="blogCard col-sm-3">
      <div className="card-group p-2">
        <div className="card">
          <img
            src={image_url}
            loading="lazy"
            className="card-img-top img-fluid"
            alt="Blog Card"
            onClick={() => {
              !currentUser && toastWarnNotify("Please log in to see details");
              navigate("/details/" + id);
            }}
          />
          <div
            className="card-body dashboard"
            onClick={() => {
              !currentUser && toastWarnNotify("Please log in to see details");
              navigate("/details/" + id);
            }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {content}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              {"Category: " + category_name}
            </small><hr />
            <small className="text-muted">
              {"Published at: " + prettyPublishDate + "           by " + user}
            </small><hr />
            <div>
            <small className="text-muted icons">
              <p className="d-flex justify-content-around" >
              <span ><BsFillHeartFill />  {" " + like?.length} </span>
              <span ><BsChatLeftDots /> {" " + comment?.length}</span>
              <span ><BsFillEyeFill /> {" " + views?.length} </span>
              </p>       
            </small>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
