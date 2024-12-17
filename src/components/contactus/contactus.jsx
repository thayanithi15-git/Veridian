import React from "react";
import { lighttheme } from "../../theme/themeprovider";
import { ContactusStyledNew } from "./contactusstyled";
import { FaArrowRight } from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Contactus() {
  const ContactusStyled = ContactusStyledNew(lighttheme);

  return (
    <Box sx={ContactusStyled.footer}>
      <Box sx={ContactusStyled.leftfooter}></Box>
      <Grid sx={ContactusStyled.footercontents}>
        <Box sx={ContactusStyled.contactus}>Contact US</Box>
        <Typography sx={ContactusStyled.ques}>
          Have questions or need more information? Reach out to us at.
        </Typography>
        <Box sx={ContactusStyled.maildetails}>
          <Box sx={ContactusStyled.mailcontainer}>
            <Typography sx={ContactusStyled.mailto}>MAIL TO</Typography>
            <Typography sx={ContactusStyled.mail}>info@veridian.com</Typography>
          </Box>
          <Box sx={ContactusStyled.mailarrow}>
            <FaArrowRight />
          </Box>
        </Box>
        <Typography sx={ContactusStyled.help}>'We're help to help!'</Typography>
      </Grid>
      <Box sx={ContactusStyled.rightfooter}></Box>
    </Box>
  );
}
