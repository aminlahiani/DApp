// @mui material components
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

// @mui icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export default FaqList;
