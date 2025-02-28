import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";

function Header() {
  return (
    <>
      <div className="navbar">
        <h3>Rightstay</h3>
        <div className="search-bar">
          <div className="search-bar-text">Anywhere</div>
          <div className="search-bar-text">Any Week</div>
          <div className="search-bar-text2">Add guests</div>
          <div className="search-icon-div">
            <SearchRoundedIcon className="search-icon" />
          </div>
        </div>
        <div className="profile-container">
          <div className="rightstay-your-home">Rightstay your home</div>
          <div className="rightstay-your-home">
            <LanguageIcon sx={{ fontSize: "1.3rem" }} />
          </div>
          <div className="profile-div">
            <BasicMenu />
          </div>
        </div>
        <MobileSearchBar />
        <SimpleBottomNavigation />
      </div>
    </>
  );
}

export default Header;
