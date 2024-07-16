import React, { Component } from "react";
import { Box, Button, Stack, TextField, IconButton } from "@mui/material";
import ImportIcon from "../../../assets/images/dashboard/import-icon.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchIcon from "@mui/icons-material/Search";
import csvIcon from "../../../assets/images/csv.png";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DataGrid } from "@mui/x-data-grid";
import customerIcon from "../../../assets/images/table-logo.png";
import userImgGroup from "../../../assets/images/user-group.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { appPrefix } from "constants";
import Avatar from "../../../assets/images/avatar.png";
import TableLogo from "../../../assets/images/table-logo.png";
import Avatar1 from "../../../assets/images/Avatar1.png";
import Avatar2 from "../../../assets/images/Avatar2.png";
import Avatar3 from "../../../assets/images/Avatar3.png";
import Avatar4 from "../../../assets/images/Avatar4.png";
import Avatar5 from "../../../assets/images/Avatar5.png";

const columns = [
  {
    field: "customers",
    headerName: "Customers",
    width: 200,
    sortable: false,
    resizable: false,
    renderCell: (params) => (
      <Link to={`${appPrefix}/customer-details`}>
        <Box className="d-flex align-items-center customer-box">
          <img
            src={params.row.customerIcon}
            alt=""
            style={{ marginRight: 8 }}
          />
          <span className="d-block customer-name">{params.value}</span>
        </Box>
      </Link>
    ),
  },
  {
    field: "about",
    headerName: "About",
    width: 350,
    sortable: false,
    resizable: false,
    renderCell: (params) => {
      return (
        <Box className="about-details">
          <Box className="title">{params.row.about}</Box>
          <Box className="decription">{params.row.decription}</Box>
        </Box>
      );
    },
  },

  {
    field: "total_brands",
    headerName: "Total Brands",
    type: "number",
    width: 150,
    sortable: false,
    resizable: false,

    renderCell: (params) => (
      <span className="d-block brand-number">{params.value}</span>
    ),
  },
  {
    field: "users",
    headerName: "Users",
    sortable: false,
    width: 160,
    resizable: false,

    renderCell: (params) => <img src={userImgGroup} alt="" />,
  },
  {
    field: "action",
    headerName: "",
    sortable: false,
    width: 160,
    resizable: false,

    renderCell: (params) => (
      <Box className="edit-delete-btn">
        <IconButton className="icon-btn" sx={{ mr: 2 }}>
          <DeleteOutlineIcon />
        </IconButton>
        <IconButton className="icon-btn">
          <EditIcon />
        </IconButton>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    customerIcon: TableLogo,
    customers: "Namshi",
    about: "A Street Wear",
    decription: "Basic Introduction about Namshi comes here",
    total_brands: "8 Brands",
  },
  {
    id: 2,
    customerIcon: Avatar,
    customers: "Capsule",
    about: "Casual Wear",
    decription: "Basic Introduction about Capsule comes here",
    total_brands: "2 Brands",
  },
  {
    id: 3,
    customerIcon: Avatar1,
    customers: "Command R",
    about: "Active Wear",
    decription: "Basic Introduction about Command R comes here",
    total_brands: "5 Brands",
  },
  {
    id: 4,
    customerIcon: Avatar2,
    customers: "Hourglass",
    about: "Athleisure",
    decription: "Basic Introduction about Hourglass comes here",
    total_brands: "1 Brands",
  },
  {
    id: 5,
    customerIcon: Avatar3,
    customers: "Layers",
    about: "Formal Wear",
    decription: "Basic Introduction about Layers comes here",
    total_brands: "2 Brands",
  },
  {
    id: 6,
    customerIcon: Avatar4,
    customers: "Quotient",
    about: "Kids Wear",
    decription: "Basic Introduction about Quotient comes here",
    total_brands: "1 Brands",
  },
  {
    id: 7,
    customerIcon: Avatar5,
    customers: "Sisyphus",
    about: "Business Casual",
    decription: "Basic Introduction about Sisyphus comes here",
    total_brands: "4 Brands",
  },
];

class Customers extends Component {
  static propTypes = {};

  render() {
    return (
      <Box className="page-container">
        <Box className="customer-page-container">
          <Stack
            className="list-heading"
            spacing={1.5}
            direction="row"
            justifyContent={"space-between"}
            alignItems={"start"}
            useFlexGap
            flexWrap="wrap"
          >
            <Box className="d-block total-customers-box">
              <span className="d-block box-title">Total Customers</span>
              <Box className="d-flex align-items-center justify-content-between">
                <h2 className="d-block number">24</h2>
                <Box className="percentage-box">
                  <ArrowUpwardIcon />
                  100%
                </Box>
              </Box>
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
          <Box className="table-header-container d-flex justify-content-between align-items-center">
            <Stack
              className="list-heading"
              spacing={2}
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              useFlexGap
              flexWrap="wrap"
            >
              <Button
                className="btn-outline-secondary"
                variant="outlined"
                endIcon={<CloseIcon />}
              >
                All time
              </Button>

              <Button
                className="btn-outline-secondary"
                variant="outlined "
                endIcon={<CloseIcon />}
              >
                US, AU, +4{" "}
              </Button>
              <Button
                className="btn-outline-secondary"
                variant="outlined"
                startIcon={<FilterListIcon />}
              >
                More filters
              </Button>
            </Stack>
            <Stack
              className="list-heading"
              spacing={2}
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              useFlexGap
              flexWrap="wrap"
            >
              <Button className="btn-outline-secondary" variant="outlined">
                <img src={csvIcon} alt="" className="m-r-2" />
                Download CSV
              </Button>
              <Box className="search-bar">
                <SearchIcon />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="search-input"
                  placeholder="Search"
                />
              </Box>
            </Stack>
          </Box>
          <Box className="common-table">
            <DataGrid
              rows={rows}
              columns={columns}
              disableRowSelectionOnClick
              disableColumnMenu
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Customers;
