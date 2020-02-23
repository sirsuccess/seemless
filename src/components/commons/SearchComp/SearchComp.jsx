import React from "react";

import SearchIcon from "../SearchIcon";
import Microphone from "../Microphone";
import "./SearchComp.css";

export default function SearchComp({
  autoCompleteFunction,
  closeAutoComplete,
  searchFunction
}) {
  const inputfocus = () => {
    autoCompleteFunction();
  };
  return (
    <div className="SearchComp">
      <SearchIcon />
      <input
        type="text"
        onFocus={inputfocus}
        onBlur={() => closeAutoComplete()}
        onChange={searchFunction}
        // onKeyDown={}
      />
      <Microphone />
    </div>
  );
}
