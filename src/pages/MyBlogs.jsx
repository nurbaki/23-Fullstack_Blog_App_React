import React from "react";
import BlogCard from "../components/BlogCard";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect, useContext, useState } from "react";

const MyBlogs = () => {
  
const { blogsArray, currentUser } = useContext(AuthContext);

const [myBlogsArray, setMyBlogsArray] = useState([]);

useEffect(() => {
  const findMyBlogs = () => {
    const array1=[];
    let arrayindex=0;
    for (let index = 0; index < blogsArray.length; index++) {
        const element = blogsArray[index];
        if (element.user == currentUser.user.username) {
            array1[arrayindex] = element;
            arrayindex +=1; 
         }
    }
    setMyBlogsArray(array1);
  };
  findMyBlogs();
}, []);

var blogsAmount = myBlogsArray.length;

  return (
    <>
      <div className="text-center mt-3">
        <h1 className="pageHeader" style={{ fontFamily: "Girassol" }}>
          ─── MyBlogs ───
        </h1>
        <hr />
        <h1 className="pageHeader" style={{ fontFamily: "Girassol" }}>
          You have {blogsAmount} blogs 
        </h1>
        <hr />
      </div>
      <div className="row d-flex justify-content-center flex-wrap">
        {myBlogsArray?.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </>
  );
};

export default MyBlogs;
