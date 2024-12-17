import { Box } from "@mui/material";
import React from "react";
import { CopyrightStyledNew } from "./styled";
import { lighttheme } from "../../theme/themeprovider";

export default function Copyright() {
  const CopyStyled = CopyrightStyledNew(lighttheme);

  return (
    <Box sx={CopyStyled.copy_main}>
      <Box>
        COPYRIGHT © Veridian 2024. All rights reserved. Any and all content
        included on this website or incorporated by reference is protected by
        international copyright laws.
      </Box>
      <Box>Term of use</Box>
    </Box>
  );
}
