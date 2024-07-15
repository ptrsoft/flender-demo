import React, { Component, useEffect } from "react";
import { Box, Divider, TextField } from "@mui/material";
import siteLogo from "../../assets/images/site-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import dashboardIcon from "../../assets/images/dashboard.png";
import customersIcon from "../../assets/images/customer.png";
import brandsIcon from "../../assets/images/brand.png";
import usersIcon from "../../assets/images/user.png";
import sideBarUserImg from "../../assets/images/avatar.png";
import LogoutIcon from "@mui/icons-material/Logout";
import supportIcon from "../../assets/images/support.png";
import { Link } from "react-router-dom";
import { appPrefix } from "constants";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  return (
    <Box className="side-bar-container">
      <Box className="side-bar-details">
        <img src={siteLogo} alt="" />
        <Box className="search-bar">
          <SearchIcon />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="search-input"
            placeholder="Search"
          />
        </Box>
        <Box className="top-pages-name">
          <Link to={`${appPrefix}/dashboard`}>
            <Box
              className={`sidebar-page-container ${
                location.pathname.split("app/")[1] === "dashboard"
                  ? "active"
                  : ""
              } d-flex align-items-center`}
            >
              <img src={dashboardIcon} alt="" />
              <span className="d-block page-name">Dashboard</span>
            </Box>
          </Link>
          <Link to={`${appPrefix}/customers`}>
            <Box
              className={`sidebar-page-container ${
                location.pathname.split("app/")[1] === "customers"
                  ? "active"
                  : ""
              } d-flex align-items-center`}
            >
              <img src={customersIcon} alt="" />
              <span className="d-block page-name">Customers</span>
            </Box>
          </Link>
          <Link to={`${appPrefix}/brands`}>
            <Box
              className={`sidebar-page-container ${
                location.pathname.split("app/")[1] === "brands" ? "active" : ""
              } d-flex align-items-center`}
            >
              <img src={brandsIcon} alt="" />
              <span className="d-block page-name">Brands</span>
            </Box>
          </Link>
          <Link to={`${appPrefix}/users`}>
            <Box
              className={`sidebar-page-container ${
                location.pathname.split("app/")[1] === "users" ? "active" : ""
              } d-flex align-items-center`}
            >
              <img src={usersIcon} alt="" />
              <span className="d-block page-name">Users</span>
            </Box>
          </Link>
          <Box className="bottom-pages-name">
            <Link to={`${appPrefix}/support`}>
              <Box
                className={`sidebar-page-container ${
                  location.pathname.split("app/")[1] === "support"
                    ? "active"
                    : ""
                } d-flex align-items-center`}
              >
                <img src={supportIcon} alt="" />
                <span className="d-block page-name">Support</span>
              </Box>
            </Link>
            <Divider />
            <Box className="d-flex align-items-start justify-content-between">
              <Box className="d-flex align-items-center">
                <img src={sideBarUserImg} alt="" />
                <Box className="d-block">
                  <span className="d-block user-name"> Olivia Rhye</span>
                  <span className="d-block user-emailld">
                    olivia@flender.info
                  </span>
                </Box>
              </Box>
              <LogoutIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SideBar;
