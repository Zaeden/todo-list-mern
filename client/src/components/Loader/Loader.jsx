import React from "react";
import "../Loader/Loader.css";

const Loader = () => {
  return (
    <>
      {/* <div className="loader-container"> */}
        <span className="loader-title">Loading</span>
        <span className="loader-title dot-1">.</span>
        <span className="loader-title dot-2">.</span>
        <span className="loader-title dot-3">.</span>
      {/* </div> */}
    </>
  );
};

export default Loader;
