import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";

function BlogSideBar() {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 3,
        }}
      >
        <Card>
          <CardMedia
            image={"/static/mock-images/covers/cover_1.jpg"}
            sx={{ height: 80, width: 80 }}
          />
        </Card>
        <Box sx={{ ml: 2 }}>
          <Typography>Scrum Has Hit the Glass Ceiling</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            By {"Amin Lahiani"} • {"16 Mar 2020"}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default BlogSideBar;
