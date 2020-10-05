import React from "react";
import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto/ProfilePhoto";
import Address from "./Component/Profile/Address/Address";
import Nav from "./Component/Profile/Nav/Nav";
import FullName from "./Component/Profile/FullName/FullName";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Nav />
      </div>

      <div className="Address">
        <Address />
      </div>
      <div className="ProfilePhoto">
        <ProfilePhoto />
      </div>
      <FullName />
    </div>
  );
}

export default App;
