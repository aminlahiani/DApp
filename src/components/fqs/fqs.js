import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FaqList from "./FaqList";
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

function FQS1() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "background.default",
          py: 15,
        }}
      >
        <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h4">
        Do you have any Question?
        </Typography>

        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
         Here are some of the basic types of questions
for our customers .
        </Typography>
          <FaqList faqList={faqList} />
        </Container>
      </Box>
    </div>
  );
}

export default FQS1;
