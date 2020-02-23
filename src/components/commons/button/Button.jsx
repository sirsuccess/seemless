import React from "react";

import "./Button.css";

export default function Button({ text, bgColor, textColor, borderColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "0.5em 1em",
        fontWeight: "600",
        borderRadius: "3px"
        // border: "1px solid #4485f2",
        // borderColor: borderColor
      }}
    >
      {text}
    </div>
  );
}
