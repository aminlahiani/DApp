import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function SimpleTestimonial(props) {
  const { data } = props;
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
          &quot;{data.testimonial}&quot;
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 3,
          }}
        >
          <Avatar src={data.avatar} sx={{ mr: 2 }} variant="rounded" />
          <div>
            <Typography color="white" variant="h6">
              {data.name}
            </Typography>
            <Typography color="white" variant="body2">
              {data.role}
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
export default SimpleTestimonial;
