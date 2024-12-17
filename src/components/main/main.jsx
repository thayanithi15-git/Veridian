import { Box, Button } from "@mui/material";
import React from "react";
import { FiCornerRightDown } from "react-icons/fi";
import { lighttheme } from "../../theme/themeprovider";
import { MainStyledNew } from "./mainstyled";
import LeftImg from "../../assets/Leftimg.svg";
import RightImg from "../../assets/Rightimg.svg";

export default function Main() {
  const MainStyled = MainStyledNew(lighttheme);

  return (
    <Box sx={MainStyled.homepage}>
      <img style={MainStyled.left} src={LeftImg}></img>
      <Box sx={MainStyled.mainpage}>
        <Box sx={MainStyled.invest}>INVESTMENT MANAGEMENT</Box>
        <Box sx={MainStyled.empower}>
          Empowering Investments with Expertise and Strategy
        </Box>
        <Button sx={MainStyled.knowmore}>
          <Box sx={MainStyled.know}>Know more</Box>
          <FiCornerRightDown />
        </Button>
      </Box>
      <img style={MainStyled.right} src={RightImg}></img>
    </Box>
  );
}
