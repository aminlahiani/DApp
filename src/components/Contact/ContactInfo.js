// @mui material components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

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

export default ContactInfo;
