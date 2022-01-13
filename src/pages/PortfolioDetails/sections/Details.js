import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Details = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 3,
      }}
    >
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <Typography variant="h3" color="textPrimary" mb={3}>
          Trydo
          </Typography>

         
          <Typography  color="textSecondary" variant="body1">
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he
            wouldn&apos;t scroll to get here. Add a button if you want the user
            to see more. We are here to make life better.
            <br /> <br />
            And now I look and look around and there&aposl;s so many Kanyes
            I&apos;ve been trying to figure out the bed design for the master
            bedroom at our Hidden Hills compound... and thank you for turning my
            personal jean jacket into a couture piece.
            <br /> <br />
            The way to survive in modern society is to be an ascetic. It is to
            retreat from society. There&aposl;s too much society everywhere you
            go…The only solution is turn it off.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};
