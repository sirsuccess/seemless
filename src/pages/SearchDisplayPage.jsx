import React from "react";
import Navbar from "../components/features/searchDisplayNav/SearchDisplayNav";
import TopNavbar from "../components/commons/searchTopNav/SearchTopNav";
import BtomNavbar from "../components/commons/SeachPageNavBtom/SeachPageNavBtom";
import Footer from "../components/features/footer/Footer";
import Body from "../components/features/SearchDisplayBody/SearchDisplayBody";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TopNavbar />
      <BtomNavbar /> */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
