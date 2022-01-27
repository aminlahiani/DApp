import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { MinusOutlined as MinusOutlinedIcon } from "../../icons/minus-outlined";
import Icon from "@mui/material/Icon";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import { Logo } from './logo';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const sections = [
  {
    title: "Menu",
    links: [
      {
        title: "Browse Components",
        href: "/browse",
      },
      {
        title: "Documentation",
        href: "/docs/welcome",
      },
    ],
  },
  {
    title: "Placeholders",
    links: [
      {
        title: "Terms & Conditions",
        href: "#",
      },
      {
        title: "License",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
];
const socialIcons = [
  {
    icon2: <FacebookIcon fontSize="small" color="primary" />,
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "Github",
    href: "https://github.com/dunky11/react-saas-template",
  },
  {
    icon2: <InstagramIcon fontSize="small" color="primary" />,
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Facebook</title>
        <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
      </svg>
    ),
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon2: <TwitterIcon fontSize="small" color="primary" />,
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    icon2: <LinkedInIcon fontSize="small" color="primary" />,
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Twitter</title>
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </svg>
    ),
    label: "Twitter",
    href: "https://www.twitter.com/",
  },
];
export const MainFooter = (props) => {
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
            md={6}
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
              src="/landingpage.svg"
              alt="macbook"
              height="200px"
              width="200px"
            />

            <Typography variant="h6" color="textPrimary">
              About the Company
            </Typography>
            <Typography style={{ color: "#8f9296" }} paragraph>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis
              velit, eu auctor lacus vehicula sit amet.
            </Typography>
          </Grid>
          {sections.map((section, index) => (
            <Grid
              item
              key={section.title}
              md={3}
              sm={4}
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1,
                },
              }}
              xs={12}
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
                      <MinusOutlinedIcon color="primary" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Link href={link.href} color="textPrimary" variant="subtitle2">
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
            borderColor: (theme) => alpha(theme.palette.primary.contrastText, 0.12),
            my: 6,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Copyright />
          </Box>

          <Box display="flex">
            {socialIcons.map((socialIcon, index) => (
              <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                <IconButton
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
};
