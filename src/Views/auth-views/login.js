import React, { useState, useEffect } from "react";
import { Box, Grid, Checkbox, FormControlLabel } from "@mui/material";
import { OutlinedInput, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import { onLogin } from "../../redux-store/toolkit/auth/authSlice";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appPrefix } from "../../constants";
import SiteLogo from "../../assets/images/site-logo.png";

const LoginComponent = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitLogin = () => {
    props.onLogin(true);
    navigate("appPrefix");
  };

  return (
    <Box className="login-container">
      <Grid
        container
        spacing={2}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={10}>
          <Box component="form" noValidate autoComplete="off">
            <Box className="top-content" justifyContent={"center"}>
              <Box>
                <img src={SiteLogo} alt="" />
              </Box>
              <Box className="titile">
                <h4>Log in to your account</h4>
                <p>Welcome back! Please enter your details.</p>
              </Box>
            </Box>
            <FormControl variant="outlined" className="form-group">
              <label>Email</label>
              <OutlinedInput
                className="form-control"
                required
                error={false}
                placeholder="Enter your email"
                name="userName"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl variant="outlined" className="form-group">
              <label>Password</label>
              <OutlinedInput
                className="form-control"
                required
                type="password"
                error={false}
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
            </FormControl>
            <Box className="check-box" justifyContent={"space-between"}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember for 30 days"
              />
              <a href="">Forgot password</a>
            </Box>
            <Button
              variant="contained"
              className="btn primary-btn login-btn"
              onClick={handleSubmitLogin}
            >
              Sign in
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
const mapStateToProps = ({ auth }) => {
  const { loginStatus } = auth;
  return { loginStatus };
};
export default connect(mapStateToProps, { onLogin })(LoginComponent);
