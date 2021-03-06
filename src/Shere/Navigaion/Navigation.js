import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/appoinmenthome">Appinment</Link>
          {user.email ? (
            <Box>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dahsbord"
              >
                <Button color="inherit">Dashbord</Button>
              </Link>
              <Button
                style={{ textDecoration: "none", color: "white" }}
                onClick={logOut}
                color="inherit"
              >
                logOut
              </Button>
            </Box>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
          {/* <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
