import { Box, Button, Container, Grid, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const accordions = [ 1 , 2 , 3 , 4 , 5 , 6]
export const HomeDesigners = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: 15
      }}
      {...props}>
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          spacing={3}
        >
          <Grid
            item
            md={6}
            sm={8}
            xs={12}
          >
            <Box
              sx={{
                position: 'relative',
                pt: 'calc(960 / 1225 * 100%)',
                '& img': {
                  height: 'auto',
                  position: 'absolute',
                  top: 0,
                  width: '100%'
                }
              }}
            >
              <img
                alt="For designers"
                src="https://enbtsl.com/media/resturant/slider52x.webp"
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h3">
              For designers
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ my: 3 }}
              variant="subtitle1"
            >
              We &apos; ve included the source Figma files to Plus & Extended licenses so you can
              get creative! Build layouts with confidence.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                m: -1
              }}
            >
              <Button
                component="a"
            
                href="https://www.figma.com/file/W9jfIqc2IkdZKh77yOjLm7/MKP-v5.0(preview)"
                size="large"
                sx={{ m: 1 }}
                target="_blank"
                variant="outlined"
              >
                Preview Figma
              </Button>
              <Button
                disabled
         
                size="large"
                sx={{ m: 1 }}
                variant="outlined"
              >
                Preview Sketch
              </Button>
              <ListItemText
                    primary='{item.title}'
                    secondary='{item.text}'
                    primaryTypographyProps={{
                      variant: 'h6',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                    }}
                  />
    {accordions.map(accordion => (
         <Accordion key={accordion}  >
         <AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography  color="textPrimary" variant="h6">Accordion 1</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography   color="textSecondary"
         variant="body1">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
 malesuada lacus ex, sit amet blandit leo lobortis eget.
</Typography>
</AccordionDetails>
</Accordion>

    ))}
                
      
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
