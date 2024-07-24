import React from "react";
// import  logo from "../assets/logo-png.png"
import  logo from "../assets/logo-transparent-png.png"
// import logo from "../assets/logo-no-background.png"
// import logo from "../assets/logo-color.png"
// import logo from "../assets/logo-black.png"
function AuthLayouts({ children }) {
  return (
    <>
      <header className="flex justify-center items-center h-20 py-3 shadow-lg bg-white">
        <img src={logo}
        alt="logo"
        className="h-16"
        style={{ borderRadius: "50%" }}
        />
        
      </header>
      {children}
    </>
  );
}

export default AuthLayouts;
