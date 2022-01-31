// react Hooks
import { useEffect, useContext, useState } from "react";

// @mui material components
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material";

// @mui icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";

// react-router-dom components
import { Link } from "react-router-dom";

// animated
import { AnimatedAppBar } from "../Animated";

// Color Mode Context
import ColorModeContext from "../../assets/theme/ColorModeContext";

// Logo
import logo from "../../assets/images/logo.svg";

// pages
const pages = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "about" },
  { id: 3, title: "Services", href: "services" },
  { id: 4, title: "Portfolio", href: "portfolio" },
  { id: 5, title: "Blogs", href: "blogs" },
  { id: 6, title: "FAQ", href: "faq" },
  { id: 7, title: "Contact Us", href: "/contact" },
];

function MainNavbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  // ---------------------  animations ------------------
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // -----------------------------------------------------

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AnimatedAppBar
      elevation={3}
      sx={{
        position: "sticky",
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        maxHeight: 59,
        opacity: 0.8,
        overflow: "hidden",
      }}
      animate={
        scrolled
          ? {
              top: 30,
              width: "80%",
              margin: "0 auto",
              borderRadius: 30,
              boxShadow: `0px 23px 34px 8px rgba(0,0,0, .1)`,
              opacity: 1,
            }
          : {
              top: 0,
              width: "100%",
              margin: 0,
              borderRadius: 0,
              boxShadow: "unset",
              opacity: 0.8,
            }
      }
      transition={{ type: "tween" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ height: 59 }} disableGutters>
          <Box component="img" src={logo} alt="macbook" height="30px" width="30px" />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.id} style={{ textDecoration: "none" }} to={page.href}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ display: "block", color: "text.primary" }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon fontSize="small" color="primary" />
            ) : (
              <NightsStayOutlinedIcon fontSize="small" color="primary" />
            )}
          </IconButton>
          <IconButton>
            <GitHubIcon fontSize="small" color="primary" />
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
                <Link key={page.id} to={page.href} style={{ textDecoration: "none" }}>
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
    </AnimatedAppBar>
  );
}
export default MainNavbar;
