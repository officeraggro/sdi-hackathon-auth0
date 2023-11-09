import React from "react";
import '../styles/main.css'

const PageLoader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." height='50px'/>
    </div>
  );
};

export default PageLoader
