import React from "react";
import BlogCard from "../components/BlogCard";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect, useContext, useState } from "react";

const Main = () => {
  const { blogsArray, setBlogsArray } = useContext(AuthContext);

  const [publishedBlogs, setPublishedBlogs] = useState([]);

  useEffect(() => {
    readDjangoBlog();
    console.log(blogsArray);
  }, []);

const readDjangoBlog = async function(){
    const response = await fetch("https://nurbaki.pythonanywhere.com/blogapp/posts/")
    .then((response) => response.json())
    .then((array) => {
      setBlogsArray(array);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
useEffect(() => {
  const findBlogs = () => {
    const array1=[];
    let arrayindex=0;
    for (let index = 0; index < blogsArray.length; index++) {
        const element = blogsArray[index];
        if (element.status_name === "Published") {
            array1[arrayindex] = element;
            arrayindex +=1; 
         }
    }
    setPublishedBlogs(array1);
  };
  findBlogs();
}, [blogsArray]);

  return (
    <>
      <div className="text-center mt-3">
        <h1 className="pageHeader" style={{ fontFamily: "Girassol" }}>
          ─── Dashboard ───
        </h1>
        <hr />
      </div>
      <div className="row d-flex justify-content-center flex-wrap">
        {publishedBlogs?.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </>
  );
};

export default Main;
