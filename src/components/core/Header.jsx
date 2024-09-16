import React from "react";
import { Navbar } from "../ui/navbar";

function Header() {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white w-[80vw] border-2 border-blue-200 rounded-box px-5 shadow-xl">
      <Navbar />
    </div>
  );
}

export default Header;
