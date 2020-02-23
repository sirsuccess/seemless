import React, { useState } from "react";

import Search from "../../commons/SearchComp/SearchComp";
import Logo from "../../commons/Logo";
import Button from "../../commons/button/SearchBtn";
import Offer from "../../commons/offer/Offer";
import AutoCompleteDisplay from "../../commons/autoCompleteDisplay/AutoCompleteDisplay";
import searchData from "../../../data/searchData.json";
import "./Body.css";

export default function Body() {
  const initialAutoCompleteData = [
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    },
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    },
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    },
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    },
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    },
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    },
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    },
    {
      name: "animal",
      title: "animal Kingdom",
      description: "",
      url: "",
      category: "animal"
    }
  ];
  console.log("this is searchData", searchData);

  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [autoCompleteData, setAutoCompleteData] = useState(
    initialAutoCompleteData
  );

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
    console.log("setAutoCompleteData", autoCompleteData);

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
    <div className="Body">
      <Logo />
      <Search
        autoCompleteFunction={autoCompleteFunction}
        closeAutoComplete={closeAutoComplete}
        searchFunction={searchFunction}
      />
      <AutoCompleteDisplay
        showAutoComplete={showAutoComplete}
        autoCompleteData={autoCompleteData}
      />
      <div className="button-section">
        <Button text="Google Search" bgColor="#f2f2f2" textColor="#fff" />
        <Button
          text="I'm Feeling Lucky"
          bgColor="#f2f2f2"
          textColor="#4485f2"
          //   borderColor="#dadce0"
        />
      </div>
      <Offer />
    </div>
  );
}
