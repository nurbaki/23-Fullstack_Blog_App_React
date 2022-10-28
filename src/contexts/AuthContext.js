import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialValues = {
  title: "",
  image_url: "",
  content: "",
  category: "",
  status: ""
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")) || false);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const [blogsArray, setBlogsArray] = useState([]);
  const [blog, setBlog] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState("SUBMIT");


  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isSubmit,
        setIsSubmit,
        blog,
        setBlog,
        info,
        setInfo,
        blogsArray,
        setBlogsArray,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
