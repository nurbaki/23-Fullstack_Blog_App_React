import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { addBlogDjango, updateBlogDjango } from "../helpers/djangobackend";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const { currentUser, blog, isSubmit, setBlog, setIsSubmit } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value, user_id: currentUser.user.id});
  };

const handleSubmit = (e) => {
    e.preventDefault();

    if (blog.id) {
      updateBlogDjango(blog, navigate, blog.id); //UPDATE islemi yapan fonksiyon
      setBlog({
        title: "",
        image_url: "",
        content: "",
        category: "",
        status: ""
      });
      setIsSubmit("SUBMIT");
    } else {
      addBlogDjango(blog, navigate); // ADD islemi yapan fonksiyon burda, navbar'da da bir fonk var
      setBlog({
        title: "",
        image_url: "",
        content: "",
        category: "",
        status: ""
      });
      setIsSubmit("SUBMIT");
    }
};

  const cleanForm = () => {
    setBlog({ ...blog, title: "", image_url: "", content: "", status: "", category: ""});
    setIsSubmit("SUBMIT");
    navigate("/");
  };



  return (
    <div className="container">
      <div className="row bg-white">
        <form>
        <div className="form-floating ps-4">      
          <div className="form-floating">
          <select className="form-select" onChange={handleChange} name="category">
          <option  value={""} >Please select a Category</option>
          <option  value={"3"} >Frontend</option>
          <option  value={"2"} >Backend</option>
          <option  value={"1"} >Fullstack</option>
          </select>
          <label htmlFor="floatingInput" className="ps-2">
              Category
          </label>
          </div>
        </div>
          <div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Title"
                name="title"
                value={blog.title}
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingInput" className="ps-4">
                Title
              </label>
            </div>
          </div>
          <div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Image url"
                name="image_url"
                value={blog.image_url}
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword" className="ps-4">
                Image URL
              </label>
            </div>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Content"
              name="content"
              id="floatingTextarea2"
              style={{ height: "200px" }}
              value={blog.content}
              required
              onChange={handleChange}
            />
            <label htmlFor="floatingTextarea2" className="ps-4">
              Content
            </label>
          </div>
          <div className="form-floating ps-4">      
          <div className="form-floating">
          <select className="form-select" onChange={handleChange} name="status">
          <option  value={""}>Please select Status</option>
          <option  value={"2"}>Published</option>
          <option  value={"1"}>Draft</option>
          </select>
          <label htmlFor="floatingInput" className="ps-2">
              Status
          </label>
          </div>
        </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-primary m-2"
              onClick={handleSubmit}
            >
              {isSubmit}
            </button>
            <button onClick={cleanForm} className="btn btn-success">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
