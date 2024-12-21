import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <NavLink to="">Home</NavLink>
      <NavLink to="/Product">Product</NavLink>
      <NavLink to="/Login">Login </NavLink>
      <NavLink to="/cart">cart </NavLink>
      <NavLink to="/Filter">Filter </NavLink>
    </div>
  );
}

export default Navbar;
