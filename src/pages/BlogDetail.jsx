import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { deleteBlogDjango } from "../helpers/djangobackend";
import { BsChatLeftDots, BsFillHeartFill, BsFillEyeFill } from "react-icons/bs";

const BlogDetail = () => {
  const [blogDetails, setBlogDetails] = useState("");
  const navigate = useNavigate();

  const { currentUser, blogsArray, setBlog, setIsSubmit } =
    useContext(AuthContext);
  const { id } = useParams();

var viewsNumber = [];
var commentNumber = [];
var likeNumber = [];

useEffect(() => {
    const findBlog = () => {
      for (let index = 0; index < blogsArray.length; index++) {
        const element = blogsArray[index];
        if (element.id == id) {
          setBlogDetails(element);
          break;
        }
      }
    };
    findBlog();
}, []);

  const {
    category,
    category_name,
    title,
    image_url,
    content,
    user,
    status,
    status_name,
    last_updated,
    publish_date,
  } = blogDetails;

const prettyPublishDate= new Date(publish_date).toLocaleDateString("de-DE"); 
const prettyLast_update =  new Date(last_updated).toLocaleDateString("de-DE");
const lastUpdateTime =  new Date(last_updated).toLocaleTimeString("de-DE", {
  hour: "2-digit",
  minute: "2-digit"
});

viewsNumber = blogDetails && blogDetails.views.length
commentNumber = blogDetails && blogDetails.comment.length;
likeNumber = blogDetails &&  blogDetails.like.length;


const EditBlog = () => {
    setBlog(blogDetails);
    setIsSubmit("UPDATE");
    navigate("/updateblog");
};

const likeFunction = (currentUser) =>{
  if (likeNumber ===0) {
      // addLike();
      console.log("add calisiyor");
  }else {
    for (let index = 0; index < blogDetails.like.length; index++) {
        const element = blogDetails.like[index];
        if (element === currentUser.user.username) {
          console.log("delete calisiyor");
          // deleteLike();
        }else{
          // addLike();
          console.log("add calisiyor");
        }
    }
  }
};


  return (
    <div className="container py-5 pageHeader">
      <h1
        className="text-center mb-5 pageHeader"
        style={{ fontFamily: "Girassol" }}
      >
        ─── Details ───
      </h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image_url} className="img-fluid rounded-start" alt="Blog" />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{content}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {"Category : " + category_name}
              </li>
              <li className="list-group-item">
                {"Blogger : " + user}
              </li>
              <li className="list-group-item">
                {"Last update : " + prettyLast_update + " " + lastUpdateTime}
              </li>
              <li className="list-group-item">
                {"Release Date : " + prettyPublishDate}
              </li>
              <li className="list-group-item">
              <p>
              <span className="m-1"> <span onClick={likeFunction}><BsFillHeartFill /></span>          
               {" " + likeNumber} </span>
              <span className="m-3"><BsChatLeftDots /> {" " + commentNumber}</span>
              <span className="m-3"><BsFillEyeFill /> {" " + viewsNumber} </span>
              </p>  
              </li>
              <li className="list-group-item">
                <Link to={"/"} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex text-white align-items-center justify-content-center">
        {currentUser.user.username === user ? (
          <>
            {" "}
            <button
              type="submit"
              className="btn btn-danger m-2"
              onClick={() => deleteBlogDjango(id, navigate)}
            >
              DELETE
            </button>
            <button
              type="submit"
              className="btn btn-warning"
              onClick={() => {
                EditBlog();
              }}
            >
              UPDATE
            </button>
          </>
        ) : (
          <>
            <h1>Just Blogger can change this page.</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
