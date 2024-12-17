export const InvestmentStyledNew = (theme) => ({
  investment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  investimgcon: {
    width: "100%",
    height: "32%",
  },
  investimg: {
    width: "100%",
  },
  eachinvestment: {
    height: "695px",
    backgroundColor: theme.palette.text[50],
    padding: "2%",
    display: "flex",
    flexDirection: "column",
  },
  invest_title: {
    color: "#000000",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "IBM_Plex_Serif",
    marginTop: "8%",
    "@media (max-width: 600px)": {
      marginTop: "12%",
    },
  },
  invest_description: {
    color: theme.palette.text[600],
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "DM_sans",
    marginTop: "5%",
    lineHeight: "20px",
  },
});
