import React from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Render");
  return (
    <div className="navbar-brand mb-0 h1">
      Navbar
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </div>
  );
};

export default Navbar;
