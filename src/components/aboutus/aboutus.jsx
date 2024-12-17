import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { AboutusStore } from "../zustand/store";
import { AboutusStyledNew } from "./aboutusstyled";
import { lighttheme } from "../../theme/themeprovider";
import MainVeridian from "../../assets/main_veridian.svg";

export default function Aboutus() {
  const aboutusdetails = AboutusStore((state) => state.aboutus);
  const AboutusStyled = AboutusStyledNew(lighttheme);

  return (
    <Box sx={AboutusStyled.aboutuspage}>
      <Grid item size={{ xs: 11, md: 12 }}>
        <Box sx={AboutusStyled.mainveridian}>
          <img src={MainVeridian} style={AboutusStyled.veridianimg} />
          <Typography sx={AboutusStyled.mainveridiancontent}>
            Veridian is an investment, management and development company based
            in Gibraltar. We create value in our investments by leveraging our
            own experience, using tried-and-true strategies and extensive
            industry expertise.
            <br />
            <br />
            We work with our business management team to develop and implement
            tailored strategies focused on strong products with powerful sales,
            to develop profit generating growth models. Value creation is
            fundamental to our goal and we develop our businesses with this is
            mind.
            <br />
            <br />
            Veridian's expertise is delivered with a responsible approach to our
            business, our team, our local community, and the environment.
          </Typography>
        </Box>
      </Grid>
      <Grid container spacing={3} size={12} sx={AboutusStyled.sub_aboutus}>
        {aboutusdetails.map((section, index) => (
          <Grid size={{ xs: 11, md: 6 }} key={index}>
            <Box sx={AboutusStyled.Excellence}>
              <Box sx={AboutusStyled.Excellence_content}>
                <Typography sx={AboutusStyled.about_head}>
                  {section.title}
                </Typography>
                <Typography sx={AboutusStyled.about_content}>
                  {section.content}
                </Typography>
              </Box>
              <img src={section.image} style={AboutusStyled.about_images} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
