import React from "react";

import Button from "../button/SearchBtn";
import "./SearchPageAutoCompleteDisplay.css";
import SearchIcon from "../SearchIcon";

export default function AutoCompleteDisplay({
  showAutoComplete,
  autoCompleteData,
  moveToSearchPage
}) {
  const moveToSearchFun = () => {
    moveToSearchPage();
    return;
  };
  return (
    <div
      className={
        showAutoComplete ? "AutoCompleteDisplayShow1" : "AutoCompleteDisplay"
      }
    >
      <ul>
        {autoCompleteData.map((item, index) => (
          <li key={index} onClick={moveToSearchFun}>
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
        />
      </div>
    </div>
  );
}
