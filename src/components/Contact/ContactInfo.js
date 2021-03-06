// @mui material components
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  CardContent,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function ContactInfo(props) {
  const { data } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="space-between" spacing={5}>
          <Grid item md={6} sm={8} xs={12}>
            <Box
              sx={{ borderRadius: 3 }}
              component="img"
              src={theme.palette.mode === "light" ? data.imglight : data.imgdark}
              alt="macbook"
              width="100%"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" variant="subtitle2">
                  &quot; {data.infoquot} &quot;
                </Typography>
                <List>
                  {data.infolist.map((item) => (
                    <ListItem key={item.id} disableGutters divider>
                      <ListItemAvatar>
                        <Icon
                          baseClassName={item.baseicon}
                          className={item.icon}
                          color="primary"
                          fontSize="small"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={<Typography variant="subtitle2">{item.infocontent}</Typography>}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
ContactInfo.propTypes = {
  //  data: PropTypes.objectOf(PropTypes.string, PropTypes.array).isRequired,
  data: PropTypes.shape({
    imglight: PropTypes.string,
    imgdark: PropTypes.string,
    infoquot: PropTypes.string,
    infolist: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        baseicon: PropTypes.string,
        icon: PropTypes.string,
        infocontent: PropTypes.string,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default ContactInfo;
