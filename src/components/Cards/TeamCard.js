// react Hooks
import { useState } from "react";

// @mui material components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function TeamCard(props) {
  const { data } = props;
  const theme = useTheme();

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
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Routing Team Card Front  */}
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
          <Card sx={{ width: "100%", height: "100%" }}>
            <CardMedia image={data.cover} sx={{ height: 200 }} />
            <CardContent sx={{ pt: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                  mt: "-100px",
                }}
              >
                <Avatar
                  alt="Applicant"
                  src={data.avatar}
                  sx={{
                    border: "3px solid #FFFFFF",
                    height: 200,
                    width: 200,
                  }}
                />
              </Box>
              <Link
                align="center"
                color="textPrimary"
                sx={{ display: "block" }}
                underline="none"
                variant="h5"
                href="/"
              >
                {data.name}
              </Link>

              <Divider sx={{ my: 2 }} />
            </CardContent>
          </Card>
        </Box>
        {/* Routing Team Card Back  */}

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            top: 0,
            left: 0,
            zIndex: 5,
            width: "100%",
            height: "100%",

            background: theme.palette.primary.mainGradient,

            position: "absolute",

            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Box>
            <Typography align="center" variant="h5" color="textSecondary">
              {data.designation}
            </Typography>
            <Typography align="center" variant="subtitle1" color="textSecondary">
              {data.shortDescription}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TeamCard;
