import React from "react";
import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../pages/Login";
import Main from "../pages/Main";
import BlogDetail from "../pages/BlogDetail";
import Register from "../pages/Register";
import About from "../pages/About";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";
import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/updateblog" element={<UpdateBlog />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="/details/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
