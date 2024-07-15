import React, { Component } from "react";
import {
  Box,
  Button,
  IconButton,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import AddIcon from "@mui/icons-material/Add";
import share from "../../../../assets/images/share.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  width: "calc(100% - 100px)",
  height: "calc(100% - 100px)",
};
class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      iframeLink: "",
      header: ""
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen(link, header) {
    this.setState({ open: true, iframeLink: link, header: header });
  }

  handleClose() {
    this.setState({ open: false, iframeLink: "", header: "" });
  }
  render() {
    return (
      <Box className="page-container">
        <Box className="customer-name-box d-flex align-items-center">
          <Grid container spacing={2}>
            <Grid
              item
              xs={8}
              justifyContent={"end"}
              alignItems={"center"}
              display={"flex"}
            >
              <Box className="name-box">
                <Box className="top-box d-flex align-items-center">
                  <span className="d-block name">NAMSHI</span>
                  <CloudDownloadIcon />
                </Box>
                <Box className="bottom-box d-flex">
                  <span className="d-block sub-name">
                    FLENDER GROUP BRAND ASSETS
                  </span>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} display={"flex"} justifyContent={"center"}>
              <Button
                className="primary-btn "
                variant="contained"
                startIcon={<AddIcon />}
                style={{
                  height: "fit-content",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Add user
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box className="details-box">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box className="inner-box">
                <Box className="header">
                  <span className="box-title">PROFILE</span>
                </Box>
                <Box className="body">
                  <Box
                    className="d-flex align-items-center body-name"
                    onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "CUSTOMER PRESENTATION")}
                  >
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      CUSTOMER PRESENTATION
                    </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "SOCIAL MEDIA MONITORING")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      SOCIAL MEDIA MONITORING{" "}
                    </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "LOCATIONS")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">LOCATIONS </span>
                  </Box>
                </Box>
                <Box className="footer">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TravelExploreIcon />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="inner-box">
                <Box className="header">
                  <span className="box-title">OPERATIONS</span>
                </Box>
                <Box className="body">
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "SOP")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">SOP </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "OC STATUS")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">OC STATUS</span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "SHIPPING HISTORY & INVOICE DOWNLOAD")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      SHIPPING HISTORY & INVOICE DOWNLOAD{" "}
                    </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "STATEMENT OF ACCOUNT (PW)")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      STATEMENT OF ACCOUNT (PW){" "}
                    </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "CUSTOMER SETUP")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">CUSTOMER SETUP </span>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="inner-box">
                <Box className="header">
                  <span className="box-title">SALES & MARKETING</span>
                </Box>
                <Box className="body">
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "PROJECTS & ACTIVATIONS")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      PROJECTS & ACTIVATIONS{" "}
                    </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "MARKETING IDEAS & PROPOSALS")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      MARKETING IDEAS & PROPOSALS
                    </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "STRATEGY PRESENTATION")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      STRATEGY PRESENTATION
                    </span>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="inner-box brand-overview">
                <Box className="header">
                  <span className="box-title">BRAND OVERVIEW</span>
                </Box>
                <Box className="body">
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "BRANDBOOK DOWNLOAD")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">
                      BRANDBOOK DOWNLOAD{" "}
                    </span>
                  </Box>
                  <Box className="d-flex align-items-center body-name" onClick={()=> this.handleOpen("https://docs.google.com/spreadsheets/d/1m-eP8oy-aQCGAbbDQkslZrV1yIwjVAYudmjixwlGqkE/edit?gid=0#gid=0", "FLENDER MALL")}>
                    <img src={share} alt="" />
                    <span className="d-block sub-name">FLENDER MALL</span>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="common-modal">
            <Box className="modal-header d-flex justify-content-between align-items-center w-100">
              <span className="d-block title">{this.state.header}</span>

              <IconButton aria-label="close" onClick={this.handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
        <Box className="modal-body">
        <iframe src={this.state.iframeLink} width={"100%"} height={"100%"}></iframe>

        </Box>
          </Box>
        </Modal>
      </Box>
    );
  }
}

export default CustomerDetails;
