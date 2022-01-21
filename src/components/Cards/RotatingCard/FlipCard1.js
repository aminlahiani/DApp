import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  Typography,
} from "@mui/material";
function FlipCard1() {
  const theme = useTheme();
  return (
    <Box
  
      sx={{
        bgcolor: "transparent",
        height: 500,
        width: 300,
        //height: "100%",

        perspective: "50rem",
        "&:hover .flip-card-inner": {
          transform: "rotateY(180deg)",
        },
      }}
    >
      <Box
        className={"flip-card-inner"}
        sx={{
          position: "relative",
          height: 1,
          width: 1,
          transformStyle: "preserve-3d",
          transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2),  rgba(0,0,0,0.9))`,

            height: 1,
            width: 1,
            backfaceVisibility: "hidden",
            backgroundColor: "#bbb",
            color: "black",
            backgroundSize: "cover",
          }}
        >
          <CardMedia image="/static/mock-images/covers/cover_2.jpg" sx={{ height: 200 }} />
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
                src="/static/mock-images/avatars/avatar-marcus_finn.png"
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
              variant="h6"
            >
              Marcus Finn
            </Link>
            <Typography align="center" variant="body2" color="textSecondary">
              Ux Designer
            </Typography>
            <Divider sx={{ my: 2 }} />
          </CardContent>
        </Box>
        <Box
        
              width="100%"
              height="100%"
          
          sx={{
            display: "flex",
   
         
            flexDirection: "column",
            position: "absolute",
            background: theme.palette.primary.mainGradient,
           // backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7),  rgba(0,0,0,0.9)), url(/static/mock-images/covers/cover_2.jpg)`,
            backgroundSize: "cover",

            backfaceVisibility: "hidden",

      
            transform: "rotateY(180deg)",
          }}
        >
          <Box sx={{ 
   justifyItems : "center",
   alignItems : "center ",

                }}>
          <Typography color="textPrimary" variant="h5"    sx={{ display: "block" }}   align="center">
            develop creative
          </Typography>
          <Typography color="textSecondary"    align="center" sx={{ my: 3 }} variant="subtitle1">
            orem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum
            ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare
            quis dolor tempus risus vitae feugiat fames aliquet
          </Typography>

          </Box>
        
          {/* <CardMedia image="/static/mock-images/covers/cover_2.jpg" sx={{ height: 200 }} />
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
                src="/static/mock-images/avatars/avatar-marcus_finn.png"
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
              variant="h6"
            >
              Marcus Finn
            </Link>
            <Typography align="center" variant="body2" color="textSecondary">
              Ux Designer
            </Typography>
            <Divider sx={{ my: 2 }} />
          </CardContent> */}
        </Box>
      </Box>
    </Box>
  );
}

export default FlipCard1;
