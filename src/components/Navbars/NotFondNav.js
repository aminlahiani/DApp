import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

function NotFondNav() {
  return (
    <AppBar
      elevation={3}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        maxHeight: 59,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ height: 59 }} disableGutters>
          <Box component="img" src="/landingpage.svg" alt="macbook" height="30px" width="30px" />

          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NotFondNav;
