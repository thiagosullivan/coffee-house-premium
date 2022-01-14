import React from "react";
import "./style.scss";

export default function Navbar() {
  return (
    <div className="navbar" data-scroll-section >
      <div>menu</div>

      <div className="logo-header">
        Coffee House
        <span>Premium</span>
      </div>

      <div>cart</div>
    </div>
  );
}
