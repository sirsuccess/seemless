import React from "react";

import TopNav from "../../commons/searchTopNav/SearchTopNav";
import BtomNav from "../../commons/SeachPageNavBtom/SeachPageNavBtom";
import "./SearchDisplayNav.css";

export default function SearchDisplayNav() {
  return (
    <div className="SearchDisplayNav">
      <TopNav />
      <BtomNav />
    </div>
  );
}
