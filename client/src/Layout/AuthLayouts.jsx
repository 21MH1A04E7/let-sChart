import React from "react";
// import  logo from "../assets/logo-png.png"
import  logo from "../assets/logo-transparent-png.png"
function AuthLayouts({ children }) {
  return (
    <>
      <headers className="flex justify-center items-center h-20 py-3 shadow-md bg-white">
        <img src={logo}
        alt="logo"
        className="h-16"
        style={{ borderRadius: "50%" }}
        />
        
      </headers>
      {children}
    </>
  );
}

export default AuthLayouts;
