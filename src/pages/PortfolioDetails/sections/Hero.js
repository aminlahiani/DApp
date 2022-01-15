import { Box } from "@mui/material";
import bgImage from "../../../assets/images/bg5.jpg";
export const Hero = () => {
  return (
    <Box
      minHeight="85vh"
      width="100%"
      sx={{
        // opacity: 0.5 ,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    ></Box>
  );
};
