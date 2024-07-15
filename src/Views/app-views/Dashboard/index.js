import React, { Component } from "react";
import UserIcon from "../../../assets/images/dashboard/user-icon.png";
import { Box, Button, Stack, Grid, Card } from "@mui/material";
import ImportIcon from "../../../assets/images/dashboard/import-icon.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CardImg from "../../../assets/images/dashboard/card-img.png";
import BrandIcon from "../../../assets/images/dashboard/brand-icon.png";
import UsersIcon from "../../../assets/images/dashboard/users-icon.png";
import WorldMapChartComponent from "Components/Charts/worldMapChart";
import US from "../../../assets/images/dashboard/US.png";
import IN from "../../../assets/images/dashboard/IN.png";
import AU from "../../../assets/images/dashboard/AU.png";
import CA from "../../../assets/images/dashboard/CA.png";
import GB from "../../../assets/images/dashboard/GB.png";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#EAECF0",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#7F56D9",
  },
}));

class Dashboard extends Component {
  render() {
    return (
      <Box className="page-container">
        <Box className="page-heading">
          <Stack
            className="list-heading"
            spacing={1.5}
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            useFlexGap
            flexWrap="wrap"
          >
            <Box className="d-block page-heading">
              <h2>Welcome Olivia!</h2>
              <p>Manage your customers brand assets.</p>
            </Box>
            <Stack spacing={1.5} direction="row" useFlexGap flexWrap="wrap">
              <Button className="btn-outline-secondary" variant="outlined">
                <img src={ImportIcon} alt="" className="m-r-2" />
                import
              </Button>

              <Button
                className="primary-btn "
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add customer
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box className="dashboard-cards">
          <Stack
            className="list-heading"
            spacing={3}
            direction="row"
            justifyContent={"flex-start"}
            alignItems={"center"}
            useFlexGap
            flexWrap="wrap"
          >
            <Link to={"/app/customers"}>
              <Card variant="outlined" className="dashboard-card p-4">
                <Box className="top-content d-flex align-items-center">
                  <Box className="icon">
                    <img src={UserIcon} alt="" />
                  </Box>
                  <label>Customers</label>
                </Box>
                <Box className="bottom-content d-flex align-items-center justify-content-between">
                  <Box
                    className="d-flex bottom-content-text"
                    alignItems={"flex-start"}
                  >
                    <label>24</label>
                    <span>
                      <TrendingUpIcon /> 12%
                    </span>
                  </Box>
                  <Box className="bottom-image">
                    <img src={CardImg} alt="" />
                  </Box>
                </Box>
              </Card>
            </Link>
            <Card variant="outlined" className="dashboard-card p-4">
              <Box className="top-content d-flex align-items-center">
                <Box className="icon">
                  <img src={BrandIcon} alt="" />
                </Box>
                <label>Brands</label>
              </Box>
              <Box className="bottom-content d-flex align-items-center justify-content-between">
                <Box
                  className="d-flex bottom-content-text"
                  alignItems={"flex-start"}
                >
                  <label>180</label>
                  <span>
                    <TrendingUpIcon /> 100%
                  </span>
                </Box>
                <Box className="bottom-image">
                  <img src={CardImg} alt="" />
                </Box>
              </Box>
            </Card>
            <Card variant="outlined" className="dashboard-card p-4">
              <Box className="top-content d-flex align-items-center">
                <Box className="icon">
                  <img src={UsersIcon} alt="" />
                </Box>
                <label>Users</label>
              </Box>
              <Box className="bottom-content d-flex align-items-center justify-content-between">
                <Box
                  className="d-flex bottom-content-text"
                  alignItems={"flex-start"}
                >
                  <label>180</label>
                  <span>
                    <TrendingUpIcon /> 2%
                  </span>
                </Box>
                <Box className="bottom-image">
                  <img src={CardImg} alt="" />
                </Box>
              </Box>
            </Card>
          </Stack>
        </Box>
        <Box className="users-location m-t-4">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={8}>
              <Card variant="outlined" className="user-location-card">
                <Box className="card-title">
                  <h4>Active users location</h4>
                </Box>
                <Grid container spacing={3} className="m-t-2">
                  <Grid item xs={12} sm={6} md={8}>
                    <WorldMapChartComponent />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box className="progress-bars">
                      <Box className="progress-bar">
                        <Box className="flag">
                          <img src={US} alt="" />
                        </Box>
                        <Box className="bar-content">
                          <h4>United States</h4>
                          <Box className="bar ">
                            <BorderLinearProgress
                              variant="determinate"
                              value={50}
                            />
                            <span>50%</span>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="progress-bar">
                        <Box className="flag">
                          <img src={IN} alt="" />
                        </Box>
                        <Box className="bar-content">
                          <h4>India</h4>
                          <Box className="bar ">
                            <BorderLinearProgress
                              variant="determinate"
                              value={50}
                            />
                            <span>30%</span>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="progress-bar">
                        <Box className="flag">
                          <img src={GB} alt="" />
                        </Box>
                        <Box className="bar-content">
                          <h4>United Kingdom</h4>
                          <Box className="bar ">
                            <BorderLinearProgress
                              variant="determinate"
                              value={50}
                            />
                            <span>20%</span>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="progress-bar">
                        <Box className="flag">
                          <img src={AU} alt="" />
                        </Box>
                        <Box className="bar-content">
                          <h4>Australia</h4>
                          <Box className="bar ">
                            <BorderLinearProgress
                              variant="determinate"
                              value={50}
                            />
                            <span>10%</span>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="progress-bar">
                        <Box className="flag">
                          <img src={CA} alt="" />
                        </Box>
                        <Box className="bar-content">
                          <h4>Canada</h4>
                          <Box className="bar ">
                            <BorderLinearProgress
                              variant="determinate"
                              value={50}
                            />
                            <span>50%</span>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="user-location-card">
                <Box className="card-title">
                  <h4>Active Users</h4>
                  <p>Total users actively using portal</p>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default Dashboard;
