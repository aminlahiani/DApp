// @mui material components
import { Box, Container, Typography, Avatar, Grid, Icon } from "@mui/material";

function AboutFeaturing(props) {
  const { data } = props;
  
  return (
    <Box sx={{ py: 3, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Typography color="textPrimary" variant="h3">
              {data.heading}
            </Typography>
          </Grid>
          {data.featuring.map((item, index) => (
            <Grid key={index} item md={2} xs={4}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: `${item.iconbgColor}`,
                    height: 40,

                    width: 40,
                  }}
                  variant="rounded"
                >
                  <Icon
                    baseClassName={item.baseicon}
                    className={item.icon}
                    color="white"
                    fontSize="small"
                  />
                </Avatar>
                <Typography color="textPrimary" textAlign="center" variant="h4">
                  {item.title}
                </Typography>
                <Typography color="textPrimary" variant="overline">
                  {item.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default AboutFeaturing;
