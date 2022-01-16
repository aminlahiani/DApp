import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FaqList from "components/FaqList";

const faqList = [
  {
    id: 1,
    ques: "Can I use this template For React learning or Next Js learning ?",
    ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 2,
    ques: "How can I deploy React Next Landing ?",
    ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 3,
    ques: "How can I get the customer support ?",
    ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 4,
    ques: "Will you regularly give updates of React Next Landing Page ?",
    ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export const FAQ = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "background.paper",
          py: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography sx={{ mb: 2 }} color="textPrimary" variant="h4">
            Basics
          </Typography>
          <FaqList faqList={faqList} />
          <Typography sx={{ mt: 4, mb: 2 }} color="textPrimary" variant="h4">
            Account & settings
          </Typography>

          <FaqList faqList={faqList} />
          <Typography sx={{ mt: 4, mb: 2 }} color="textPrimary" variant="h4">
            Security
          </Typography>
          <FaqList faqList={faqList} />
        </Container>
      </Box>
    </div>
  );
};
