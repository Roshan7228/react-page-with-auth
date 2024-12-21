import React from "react";

const Private = ({ children }) => {
  const isAuth = localStorage.getItem("token");

  if (!isAuth) {
    return (window.location.href = "/Login");
  } else {
    return children;
  }
};

export default Private;
