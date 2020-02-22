import React from "react";

import "./Button.css";

export default function Button({ text, bgColor, textColor, borderColor }) {
  return <div className="btn">{text}</div>;
}
