import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
const pages = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "about" },
  { id: 3, title: "Services", href: "services" },
  { id: 4, title: "Portfolio", href: "portfolio" },
  { id: 5, title: "Blogs", href: "blogs" },
  { id: 6, title: "FAQ", href: "faq" },
  { id: 7, title: "Contact Us", href: "/contact" },
];
//const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = ({ setSelectedTheme, selectedTheme }) => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSwitch = () => {
    setSelectedTheme((prevSelectedTheme) => {
      return prevSelectedTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <AppBar
      elevation={3}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        maxHeight: 59
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ height: 59 }} disableGutters>
          <Box sx={{ mt: 1, width: 40 }}>
            <img src="/landingpage.svg" />
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.id}
                style={{ textDecoration: "none" }}
                to={page.href}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{  display: "block", color: "text.primary" }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <IconButton onClick={handleSwitch}>
            {selectedTheme === "light" ? (
              <NightsStayOutlinedIcon fontSize="small" color="primary" />
            ) : (
              <LightModeOutlinedIcon fontSize="small" color="primary" />
            )}
          </IconButton>
          <IconButton>
            <GitHubIcon fontSize="small" color="primary" />
          </IconButton>
          <IconButton>
            <FacebookIcon fontSize="small" color="primary" />
          </IconButton>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.id}
                  to={page.href}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography color="textPrimary" textAlign="center">
                      {page.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
