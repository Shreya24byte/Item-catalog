/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import firebase from "firebase";
import BackgroundImg from "./BackgroundImg";

export const Header = () => {
  const [user, setUser] = useState();

  const firebaseConfig = {
    apiKey: "AIzaSyDTYTkpN7-PSEOlRGaTP30qprRSB6TSmSQ",
    authDomain: "authentication-d7475.firebaseapp.com",
    projectId: "authentication-d7475",
    storageBucket: "authentication-d7475.appspot.com",
    messagingSenderId: "409619651132",
    appId: "1:409619651132:web:05ece8dc2b4f4243e08139",
    measurementId: "G-1FJZ1VM1QX",
  };
  //Initialize firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  var provider = new firebase.auth.GoogleAuthProvider();

  function GoogleLogin() {
    console.log("login button call");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user.displayName);
        setTimeout(
          alert(`You are now logged in as ${res.user.displayName}`),
          9000
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function LogOutUser() {
    console.log("logout button call");
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser("");
        setTimeout(alert(`You are logged out`), 7000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex">
        <div className="container-fluid d-flex">
          <p className="navbar-brand fs-1 fw-bold" href="#">
            Catalog App
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fs-2 ms-4 me-5">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </Link>
            </ul>
            {user ? (
              <>
                <button
                  type="button"
                  id="login"
                  class="btn btn-dark btn-lg fs-3 me-2 ms-auto"
                  onClick={LogOutUser}
                >
                  <span className="me-4">{user}</span> Logout
                </button>
              </>
            ) : (
              <button
                type="button"
                id="login"
                class="btn btn-dark btn-lg fs-3 me-2 ms-auto"
                onClick={GoogleLogin}
              >
                <FaUser></FaUser> Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <BackgroundImg user={user} />
    </>
  );
};
