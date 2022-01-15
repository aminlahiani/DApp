import { useTheme } from "@mui/material/styles";
// Images
import { Box, Container, Grid, Typography } from "@mui/material";
import bgImage from "../../../assets/images/bg5.jpg";

export const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      ></Box>
    </>
  );
};
