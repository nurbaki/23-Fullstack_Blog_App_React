import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
