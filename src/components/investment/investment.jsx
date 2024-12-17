import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { InvestmentsStore } from "../zustand/store";
import { InvestmentStyledNew } from "./investmentstyled";
import { lighttheme } from "../../theme/themeprovider";

export default function Investment() {
  const InvestmentStyled = InvestmentStyledNew(lighttheme);
  const investmentsdetails = InvestmentsStore((state) => state.investments);

  return (
    <Box>
      <Grid container spacing={3} size={12} sx={InvestmentStyled.investment}>
        {investmentsdetails.map((investment) => (
          <Grid
            size={{ xs: 11, md: 3.7 }}
            key={investment.id}
            sx={InvestmentStyled.eachinvestment}>
            <Box sx={InvestmentStyled.investimgcon}>
              <img src={investment.image} style={InvestmentStyled.investimg} />
            </Box>
            <Box sx={InvestmentStyled.invest_title}>{investment.title}</Box>
            <Box sx={InvestmentStyled.invest_description}>
              {investment.description1}
              <br />
              <br />
              {investment.description2}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
