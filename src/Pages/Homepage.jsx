import React, { useState, useContext, useEffect } from "react";
import { HeaderComponent } from "../Components/HeaderComponent";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication";
import { SideNavComponent } from "../Components/SideNavComponent";
import "../CssFiles/HomePage.css";
export const Homepage = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
    const sideNavList=[
        {title:"Dashboard",path:"/Dashboard"},
        {title:"Profile",path:"/Profile"},
    ]
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    navigate("/");
    setUser(null);
  };
  console.log("dashboardLoading");
  return (
    <div className="grid-container">
      <div className="item1">
        <HeaderComponent handleSignOut={handleSignOut} />
      </div>
      <div className="item2">
        <SideNavComponent />
      </div>
      <div className="item3">
        <div>body</div>
      </div>
    </div>
  );
};
