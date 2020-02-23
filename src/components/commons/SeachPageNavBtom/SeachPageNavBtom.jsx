import React from "react";

import SearchComp from "../SearchComp/SearchComp";
import Button from "../../commons/button/Button";
import Logo from "../../commons/Logo";
import "./SeachPageNavBtom.css";

export default function SeachPageNavBtom() {
  return (
    <div className="SeachPageNavBtom">
      <ul>
        <li>
          <i class="fa fa-search"></i> All
        </li>
        <li>
          <i class="fa fa-image"></i> Images
        </li>
        <li>
          <i class="fa fa-map-marker-alt"></i>Maps
        </li>
        <li>
          <i class="fa fa-play-circle"></i> Videos
        </li>
        <li>
          <i class="fa fa-newspaper"></i> News
        </li>
        <li>
          <i class="fa fa-ellipsis-v"></i> More
        </li>
      </ul>
      <div className="tool">
        <span>Settings</span>
        <span>Tools</span>
      </div>
    </div>
  );
}
