import { Notifications } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";
import { useContext } from "react";
//import React from 'react';

export default function Topbar() {
  const PUBLIC_FOLDER = import.meta.env.VITE_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/register">
          <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="what's look for?"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
