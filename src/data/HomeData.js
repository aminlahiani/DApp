import { useTheme } from "@mui/material/styles";
const theme = useTheme();
export const HomeHeroData = {
    heading: "Digital Agency UI React template with MUI",
    shortDescription : "  Not just a set of tools, the package includes ready-to-deploy conceptualapplications written in JavaScript & TypeScript.",
    imagesrc  : "{`/static/contact/undraw_contact_us_${theme.palette.mode}.svg`}",
    buttons: [
      {
        variant: "contained",
        buttonColor: "btn-warning",
        url: "/about",
        text: "About Us"
      },
      {
        buttonColor: "btn-light",
        url: "/contact",
        text: "Contact Us",
        variant: "outlined",
      }
    ]
} 

