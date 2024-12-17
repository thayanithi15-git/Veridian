import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useRef } from "react";
import { BodyStyledNew } from "./styled";
import { useStore } from "../zustand/store";
import { lighttheme } from "../../theme/themeprovider";
import Copyright from "../copyright/copyright";
import { Box } from "@mui/material";
import Main from "../main/main";
import Aboutus from "../aboutus/aboutus";
import Contactus from "../contactus/contactus";
import Investment from "../investment/investment";
import Ourteam from "../ourteam/ourteam";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Body() {
  const BodyStyled = BodyStyledNew(lighttheme);

  const { setRefs } = useStore();

  const HomeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const ourTeamRef = useRef(null);
  const investmentsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    setRefs({ HomeRef, aboutUsRef, ourTeamRef, investmentsRef, footerRef });
  }, [setRefs]);

  return (
    <Box sx={BodyStyled.mainsite}>
      <Box sx={BodyStyled.main}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8}>
            <Grid size={12} ref={HomeRef}>
              <Main />
            </Grid>
            <Grid container spacing={2} xs={12} sx={BodyStyled.aboutus}>
              <Grid size={12} ref={aboutUsRef}>
                <Item sx={BodyStyled.aboutusword}>About us</Item>
                <Grid
                  container
                  spacing={2}
                  size={12}
                  sx={BodyStyled.insidedesc}>
                  <Grid item size={12} sx={BodyStyled.insidedesc}>
                    <Grid item size={{ xs: 12, md: 11 }}>
                      <Aboutus />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={3}
                    size={11}
                    sx={BodyStyled.ourteamnew}
                    ref={ourTeamRef}>
                    <Box sx={BodyStyled.outteamtopic}>Our Team</Box>
                    <Ourteam />
                  </Grid>
                  <Grid
                    container
                    spacing={3}
                    size={12}
                    sx={BodyStyled.ourteam}
                    ref={investmentsRef}>
                    <Box sx={BodyStyled.outteamtopic}>
                      Holistic Investment Approach
                    </Box>
                    <Box>
                      <Investment />
                    </Box>
                  </Grid>
                  <Grid
                    container
                    spacing={3}
                    size={12}
                    sx={BodyStyled.footerpage}
                    ref={footerRef}>
                    <Contactus />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={BodyStyled.copyright}>
        <Copyright />
      </Box>
    </Box>
  );
}
