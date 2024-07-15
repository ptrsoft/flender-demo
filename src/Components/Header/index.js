import React, { Component } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import userImg from "../../assets/images/avatar.png";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box className="header-container">
          <Box className="d-flex justify-content-between align-items-center w-100">
            <h2 className="page-title">Dashboard</h2>
            <Box className="d-flex align-items-center right-side-part">
              <SearchIcon />
              <SettingsIcon />
              <NotificationsNoneIcon />
              <img src={userImg} alt="" />
            </Box>
          </Box>
        </Box>
    );
  }
}

export default Header;
