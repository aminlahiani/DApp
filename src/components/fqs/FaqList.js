import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const FaqList = ({ faqList }) => {
  return (
    <Box sx={{ height: "100%" }}>
      {faqList.map((item) => {
        return (
          <Accordion
            key={item.id}
            sx={{
              color: "text.secondary",
              marginBottom: 0.5,
              padding: "10px 20px",

              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{
                fontWeight: 500,
                color: "text.primary",
                fontSize: 16,
                padding: 0,
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography color="textPrimary" variant="h6">
                {item.ques}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0 0 10px" }}>
             
              <Typography color="textSecondary" variant="body1">
                {item.ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FaqList;

FaqList.propTypes = {
  faqList: PropTypes.array.isRequired,
};
