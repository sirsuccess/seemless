import React from "react";
import { withRouter } from "react-router-dom";

import SearchIcon from "../SearchIcon";
import Microphone from "../Microphone";
import "./SearchComp.css";

function SearchComp({
  autoCompleteFunction,
  closeAutoComplete,
  searchFunction,
  history
}) {
  const inputfocus = () => {
    autoCompleteFunction();
  };
  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      history.push("/search");
    }
  };
  return (
    <div className="SearchComp">
      <SearchIcon />
      <input
        type="text"
        id="text"
        onFocus={inputfocus}
        onBlur={() => closeAutoComplete()}
        onChange={searchFunction}
        onKeyDown={handleKeyDown}
      />
      <Microphone />
    </div>
  );
}
export default withRouter(SearchComp);
