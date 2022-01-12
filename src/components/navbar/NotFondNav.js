import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";


import { Link } from "react-router-dom";


const NotFondNav = () => {



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
        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NotFondNav;
