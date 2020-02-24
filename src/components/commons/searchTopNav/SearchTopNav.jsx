import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import SearchComp from "../SearchComp/SearchComp";
import Button from "../../commons/button/Button";
import searchData from "../../../data/searchData.json";
import AutoCompleteDisplay from "../../commons/autoCompleteDisplay/AutoCompleteDisplay";
import initialAutoCompleteData from "../../../data/initialData";
import Logo from "../../commons/Logo";
import "./SearchTopNav.css";

function SearchTopNav() {
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [autoCompleteData, setAutoCompleteData] = useState(
    initialAutoCompleteData
  );
  function autoCompleteFunction() {
    setShowAutoComplete(true);
  }
  const searchFunction = e => {
    let searchInput = e.target.value.toLowerCase();

    let NewArr = [];
    searchData.filter(function(element, i) {
      let itemSearch =
        element.title.toLowerCase().includes(searchInput) ||
        element.description.toLowerCase().includes(searchInput);
      // ||element.tag.toLowerCase().includes(searchInput);
      if (itemSearch) {
        NewArr.push(element);
      }
      return;
    });

    setAutoCompleteData(NewArr);
  };

  function autoCompleteFunction() {
    setShowAutoComplete(true);
  }

  function closeAutoComplete() {
    if (showAutoComplete === true) {
      setShowAutoComplete(false);
    }
  }
  return (
    <>
      <div className="SearchTopNav">
        <div className="SearchTopNavLeft">
          <a href="/">
            <div className="logo1">
              <Logo LogoWidth="100px" />
            </div>
          </a>
          <SearchComp
            autoCompleteFunction={autoCompleteFunction}
            closeAutoComplete={closeAutoComplete}
            searchFunction={searchFunction}
          />
        </div>
        <div className="SearchTopNavRight">
          <div className="fa-cicle">
            <i class="fa fa-th"></i>
          </div>
          <Button text="Sign in" bgColor="#4485f2" textColor="#fff" />
        </div>
      </div>
      <AutoCompleteDisplay
        showAutoComplete={showAutoComplete}
        autoCompleteData={autoCompleteData}
        // moveToSearchPage={moveToSearchPage}
      />
    </>
  );
}
export default withRouter(SearchTopNav);
