import { Box, Button, Card, Container, Grid, Typography, CardContent } from "@mui/material";
import { Icon, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
        <Grid alignItems="center" container justifyContent="space-between" spacing={3}>
          <Grid item md={6} sm={8} xs={12}>
            <Box
              sx={{
                position: "relative",
                pt: "calc(960 / 1225 * 100%)",
                "& img": {
                  height: "auto",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                },
              }}
            >
              <img
                alt="For designers"
                src={theme.palette.mode === "dark" ? data.imgdark : data.imglight}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" variant="subtitle2">
                  &quot; {data.infoquot} &quot;
                </Typography>
                <List>
                  {data.infolist.map((item, index) => (
                    <ListItem key={index} disableGutters divider>
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

export default ContactInfo;
