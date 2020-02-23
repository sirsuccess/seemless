import React from "react";

import Country from "../../commons/country/Country";
import Settings from "../../commons/Settings/Settings";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <Country />
      <Settings />
    </div>
  );
}
