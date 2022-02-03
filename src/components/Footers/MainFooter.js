// @mui material components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme, alpha } from "@mui/material/styles";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

// Logo
import logo from "../../assets/images/logo.png";

// Copyright

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

// Footer sections
const sections = [
  {
    title: "Menu One",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Services",
        href: "/services",
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
  },
  {
    title: "Menu Two",
    links: [
      {
        title: "Protfolio",
        href: "/protfolio",
      },
      {
        title: "Blogs",
        href: "/blogs",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
    ],
  },
  {
    title: "Details Pages",
    links: [
      {
        title: "Service Details",
        href: "/service-deatils/1",
      },
      {
        title: "Blog Details",
        href: "/blog-details/1",
      },
      {
        title: "Portfolio Details",
        href: "/portfolio-deatils/1",
      },
    ],
  },
];

// Footer social Icons
const socialIcons = [
  {
    id: "1",
    icon2: <FacebookIcon fontSize="small" color="primary" />,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    id: "2",
    icon2: <InstagramIcon fontSize="small" color="primary" />,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    id: "3",
    icon2: <TwitterIcon fontSize="small" color="primary" />,

    label: "Twitter",
    href: "https://www.twitter.com/",
  },
  {
    id: "4",
    icon2: <LinkedInIcon fontSize="small" color="primary" />,

    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];
function MainFooter(props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        borderTopColor: "divider",
        borderTopStyle: "solid",
        borderTopWidth: 1,
        pb: 6,
        pt: {
          md: 15,
          xs: 6,
        },
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid
            item
            md={5}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              order: {
                md: 1,
                xs: 4,
              },
            }}
            xs={12}
          >
            <Box
              component="img"
              src={logo}
              alt="daap"
              height="50px"
              width="50px"
            />

            <Typography variant="h6" color="textPrimary">
              About the Template
            </Typography>
            <Typography style={{ color: "#8f9296" }} mt={1} paragraph>
              A professional React Template that comes with plenty of
              ready-to-use MUI Core components that will help you to build
              faster & beautiful website for your Digital Agency
            </Typography>
          </Grid>
          {sections.map((section, index) => (
            <Grid
              item
              key={section.title}
              md={2}
              sm={4}
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1,
                },
              }}
              xs={4}
            >
              <Typography color="textSecondary" variant="overline">
                {section.title}
              </Typography>
              <List disablePadding>
                {section.links.map((link) => (
                  <ListItem
                    disableGutters
                    key={link.title}
                    sx={{
                      pb: 0,
                      pt: 1,
                    }}
                  >
                    <ListItemAvatar
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        minWidth: 0,
                        mr: 0.5,
                      }}
                    >
                      <RemoveOutlinedIcon color="primary" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Link
                          href={link.href}
                          color="textPrimary"
                          variant="subtitle2"
                        >
                          {link.title}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Divider
          sx={{
            borderColor: () => alpha(theme.palette.primary.contrastText, 0.12),
            my: 6,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Copyright />
          </Box>

          <Box display="flex">
            {socialIcons.map((socialIcon) => (
              <Box
                key={socialIcon.id}
                mr={socialIcon.id !== socialIcons.length - 1 ? 1 : 0}
              >
                <IconButton
                  target="_blank"
                  aria-label={socialIcon.label}
                  sx={{
                    backgroundColor: theme.palette.background.default,

                    "&:hover": {
                      backgroundColor: theme.palette.background.paper,
                    },
                  }}
                  href={socialIcon.href}
                >
                  {socialIcon.icon2}
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default MainFooter;
