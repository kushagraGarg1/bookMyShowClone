import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import bookmyshowImage from "../images/1.png"; 
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, toggleAuthentication }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#333545" }}>
      <Toolbar>
        <img src={bookmyshowImage} alt="BookMyShow Logo" style={{ width: "100px", height: "auto", padding: "0.4rem" }} />
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Book My Show
        </Typography>
        {isAuthenticated && (
          <React.Fragment>
            <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="body1" style={{ padding: "1rem" }}>
                Home
              </Typography>
            </Link>
            <Link to="/history" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="body1" style={{ padding: "1rem" }}>
                Booking History
              </Typography>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="body1"
              style={{ padding: "1rem", cursor: "pointer" }}
              onClick={toggleAuthentication}
            >
              Logout
            </Typography>
            </Link>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
