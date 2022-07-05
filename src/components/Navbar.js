import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ScienceIcon from "@mui/icons-material/Science";
import Tooltip from "@mui/material/Tooltip";
import { grey } from "@mui/material/colors";

export default function Navbar({ title }) {
  const { toggleModals } = useContext(UserContext);
  console.log(toggleModals);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "For some reasons we can't deconnect, please check your internet connexion and retry."
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={1}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <Link to="/private/private-home">
            <IconButton size="large" edge="start" aria-label="menu">
              <Tooltip title="Version 0.1">
                <ScienceIcon sx={{ fontSize: 27, mx: 2, color: grey[100] }} />
              </Tooltip>
            </IconButton>
          </Link>
          <Typography
            variant="h4"
            component="h4"
            sx={{ flexGrow: 1, ml: "1rem" }}
          >
            {title}
          </Typography>

          {/* <Button
            variant="text"
            onClick={() => toggleModals("signUp")}
            
          >
            <Typography variant="subtitle1" component="div">
              signUp
            </Typography>
          </Button>
          <Button
            variant="text"
            onClick={() => toggleModals("signIn")}
        
          >
            <Typography variant="subtitle1" component="div">
              signIn
            </Typography>
          </Button> */}
          <Button variant="text" onClick={logOut} sx={{ mr: 2 }}>
            <Typography variant="body1" component="div">
              Log Out
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
