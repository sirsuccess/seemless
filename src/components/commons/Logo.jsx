import React from "react";
// import logo from "../../../public/googlelogo_color.png";
// import "./Button.css";

export default function Logo({ LogoWidth }) {
  return (
    <div
      style={{
        width: LogoWidth
      }}
    >
      <img src="./googlelogo_color.png" alt="Google Logo" />
    </div>
  );
}
