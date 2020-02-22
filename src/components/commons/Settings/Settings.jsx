import React from "react";

import "./Settings.css";

export default function Settings() {
  return (
    <div className="Settings">
      <div className="left-settings">
        <ul>
          <li>
            <a href="#">Advertising</a>
          </li>
          <li>
            <a href="#">Bussiness</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">How Search Works</a>
          </li>
        </ul>
      </div>
      <div className="right-settings">
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
