export const InvestmentStyledNew = (theme) => ({
  investment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  investimgcon: {
    width: "100%",
    // height: "32%",
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
    fontSize: theme.palette.fontsize.large,
    fontWeight: theme.palette.fontweight.bold,
    fontFamily: theme.palette.fontfamily.ibm_plex,
    marginTop: "1%",
    "@media (max-width: 960px)": {
      marginTop: "2%",
    },
  },
  invest_description: {
    color: theme.palette.text[600],
    fontSize: theme.palette.fontsize.small,
    fontWeight: theme.palette.fontweight.normal,
    fontFamily: theme.palette.fontfamily.dm_sans,
    marginTop: "5%",
    lineHeight: "20px",
  },
});
