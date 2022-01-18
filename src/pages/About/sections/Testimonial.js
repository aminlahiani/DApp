import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Testimonial = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#132F4C",
        py: 15,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" color="white" variant="h3">
          &quot;Devias builds some of the best templates you can find for React. They will save you
          time.&quot;
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 3,
          }}
        >
          <Avatar src="/static/home/olivier.png" sx={{ mr: 2 }} variant="rounded" />
          <div>
            <Typography color="white" variant="h6">
              Olivier Tassinari,
            </Typography>
            <Typography color="white" variant="body2">
              co-creator of @MUI
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};
