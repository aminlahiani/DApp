// @mui material components
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

// @mui icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function FaqList(props) {
  const { data } = props;
  return (
    <Box sx={{ height: "100%" }}>
      {data.map((item) => (
        <Accordion
          key={item.id}
          sx={{
            backgroundColor: "background.default",
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
      ))}
    </Box>
  );
}
FaqList.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default FaqList;
