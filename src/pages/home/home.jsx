import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getHomeStyled } from "./styled";
import Header from "../../components/header/header";
import Body from "../../components/body/body";
import { lighttheme } from "../../theme/themeprovider";
import Copyright from "../../components/copyright/copyright";

export default function Home() {
  const HomeStyled = getHomeStyled(lighttheme);

  return (
    <Box sx={HomeStyled.main}>
      <Box sx={HomeStyled.header}>
        <Header />
      </Box>
      <Box sx={HomeStyled.body}>
        <Body />
        {/* <Copyright/> */}
      </Box>
      {/* <Box sx={HomeStyled.copyright}> */}
          {/* <Copyright /> */}
        {/* </Box> */}
      {/* theme.palette.text[100] */}
    </Box>
  );
}
