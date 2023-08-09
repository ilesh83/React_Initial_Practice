import React, { useContext } from "react";
import blog from "../Images/Blogging.png";
import "../CssFiles/HeaderComponent.css";
import { AuthContext } from "../authentication";
export const HeaderComponent = ({ handleSignOut }) => {

  console.log( "Headercomponent Loading");

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid row">
          <div className="col-md-4">
            <img
              src={blog}
              alt="Logo"
              width="100px"
              height="40px"
              className="align-text-top"
            />
          </div>
          <div className="col-md-4">
            <span id="mainHeading">My Blogs</span>
          </div>
          <div className="col-md-4">
            <span id="signOut" onClick={handleSignOut}>
              SignOut
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
