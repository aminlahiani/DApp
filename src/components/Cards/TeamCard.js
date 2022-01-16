import React from 'react'
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
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function TeamCard(props) {
    const { cover, avatar, name, commonConnections } = props;
    return (
        <Card>
        <CardMedia image={cover} sx={{ height: 200 }} />
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
              src={avatar}
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
            {name}
          </Link>
          <Typography align="center" variant="body2" color="textSecondary">
            {commonConnections}
          </Typography>
          <Divider sx={{ my: 2 }} />
         
        </CardContent>
      </Card>
    )
}
TeamCard.propTypes = {
    cover: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    commonConnections: PropTypes.string.isRequired,
   
  };
export default TeamCard
