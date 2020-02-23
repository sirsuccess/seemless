import React from "react";

import Button from "../button/SearchBtn";
import "./AutoCompleteDisplay.css";
import SearchIcon from "../SearchIcon";

export default function AutoCompleteDisplay({
  showAutoComplete,
  autoCompleteData
}) {
  return (
    <div
      className={
        showAutoComplete ? "AutoCompleteDisplayShow" : "AutoCompleteDisplay"
      }
    >
      <ul>
        {autoCompleteData.map((item, index) => (
          <li key={index}>
            <span className="searchIcn">
              <SearchIcon />
            </span>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="button-section">
        <Button text="Google Search" bgColor="#f2f2f2" textColor="#fff" />
        <Button
          text="I'm Feeling Lucky"
          bgColor="#f2f2f2"
          textColor="#4485f2"
          //   borderColor="#dadce0"
        />
      </div>
    </div>
  );
}
