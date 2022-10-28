import React from "react";
import BlogForm from "../components/BlogForm";

const NewBlog = () => {
  return (
    <div className="container w-50 mt-2">
      <h1
        className="text-center m-5 pageHeader"
        style={{ fontFamily: "Girassol" }}
      >
        ─── New Blog ───
      </h1>
      <BlogForm />
    </div>
  );
};

export default NewBlog;
