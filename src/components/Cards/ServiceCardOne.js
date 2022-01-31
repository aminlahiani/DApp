// react Hooks
import { useState } from "react";

// @mui material components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";

// react-router-dom components
import { Link as RouterLink } from "react-router-dom";

function ServiceCardOne(props) {
  const { data } = props;

  // Déclare une nouvelle variable d'état, qu’on va appeler « rotate »
  const [rotate, setRotate] = useState(false);

  const rotate0 = () => setRotate(false);
  const rotate180 = () => setRotate(true);

  return (
    <Box sx={{ perspective: "50rem" }} onMouseEnter={rotate180} onMouseLeave={rotate0}>
      <Box
        sx={{
          backgroundColor: "transparent",

          position: "relative",
          transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
          transition: "all 0.8s cubic-bezier(0.30, 1.45, 0.7, 1.2)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Routing Service Card Front  */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            zIndex: 2,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",

            position: "relative",
            backfaceVisibility: "hidden",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  height: 48,
                  width: 48,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1.5,
                  boxShadow:
                    "inset 0px 5px 8px rgba(256, 256, 256, 0.3), 0px 5px 8px rgba(21, 101, 192, 0.3)",
                }}
              >
                <Icon
                  baseClassName={data.baseicon}
                  className={data.icon}
                  color="white"
                  fontSize="small"
                />
              </Box>
            </Box>
            <Typography align="center" variant="h6" color="textPrimary" sx={{ mt: 2.5, mb: 1.5 }}>
              {data.title}
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              {data.shortDescriptionFront}
            </Typography>
          </Box>
        </Box>
        {/* Routing Service Card Back  */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            borderRadius: 3,
            top: 0,
            left: 0,
            zIndex: 5,
            width: "100%",
            height: "100%",

            backgroundImage: `linear-gradient(to bottom, rgba(11, 121, 208, 0.85),  rgba(0,0,0,0.85)), url(${data.image})`,

            position: "absolute",

            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Box sx={{ px: 4 }}>
            <Typography align="center" variant="subtitle1" color="white">
              {data.shortDescriptionBack}
            </Typography>
            <Box textAlign="center">
              <Button
                variant="contained"
                component={RouterLink}
                to={`/service-deatils/${data.id}`}
                size="small"
              >
                View More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceCardOne;
