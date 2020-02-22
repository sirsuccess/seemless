import React from "react";

import Button from "../../commons/button/Button";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
        Gmail
      </a>
      <a
        href="http://www.google.com.ng/imghp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Images
      </a>
      <i class="fa fa-th"></i>
      <Button text="Sign in" bgColor="#4485f2" textColor="#fff" />
    </div>
  );
}
