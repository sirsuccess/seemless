import React from "react";

import searchData from "../../../data/searchData.json";
import "./SearchDisplayBody.css";

export default function SearchDisplayBody({ LogoWidth }) {
  return (
    <div className="SearchDisplayBody">
      {searchData.map((item, index) => (
        <div className="search-item">
          <div className="url">{item.url}</div>
          <a href="#">
            <div className="title">{item.title}</div>
          </a>
          <div className="description">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
