import React from "react";
import Home from "../../../Assets/home.png";
import Checklists from "../../../Assets/checklists.png";
import Help from "../../../Assets/help.png";

export default function ProfilePhoto() {
  return (
    <div>
      <div className="container">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img
                  class="bighead"
                  src="https://bigheads.io/svg?accessory=none&body=chest&circleColor=blue&clothing=vneck&clothingColor=black&eyebrows=serious&eyes=simple&faceMask=false&faceMaskColor=black&facialHair=none&graphic=react&hair=bun&hairColor=black&hat=beanie&hatColor=black&lashes=false&lipColor=red&mask=true&mouth=grin&skinTone=light"
                  alt="Big Head"
                />
              </div>
              <div className="profile-userbuttons">
                <button type="button" className="btn btn-success btn-sm">
                  Follow
                </button>
                <button
                  id="message"
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Message
                </button>
              </div>
              <div className="usermenu">
                <ul className="nav">
                  <li className="homemom">
                    <img className="home" src={Home} alt="HomeImage" />
                    <a href="#"> Account </a>
                  </li>
                  <li className="tasksmom">
                    <img
                      className="checklists"
                      src={Checklists}
                      alt="ChecklistsImage"
                    />
                    <a href="#">Tasks </a>
                  </li>
                  <li>
                    <img className="help" src={Help} alt="HelpImage" />
                    <a href="#"> Help </a>
                  </li>
                </ul>
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">Seif Bs</div>
                  <div className="profile-usertitle-job">Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
