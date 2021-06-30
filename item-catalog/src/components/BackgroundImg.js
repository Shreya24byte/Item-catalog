import React from "react";
import { Link } from "react-router-dom";

function BackgroundImg(props) {
  const user = props.user;
  return (
    <div className="img-container mb-5">
      <p className="sub-header text-light ">Welcome to Catalog App</p>
      <p className="fs-1 text-light">What are you waiting for?</p>
      <div className="btn-class">
        {user ? (
          <Link to="/catalog">
            <button
              type="button"
              className="btn btn-dark btn-lg p-4 px-5 fs-2 mt-2"
            >
              Get Started
            </button>
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-dark btn-lg p-4 px-5 fs-2 mt-2"
            onClick={() => alert("Please Login")}
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}

export default BackgroundImg;
