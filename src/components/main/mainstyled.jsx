export const MainStyledNew = (theme) => ({
  homepage: {
    backgroundColor: theme.palette.background.primary.main,
    height: "520px",
    marginTop: "4%",
    gap: "1rem",
    position: "relative",
    "@media (max-width: 600px)": {
      marginTop: "0%",
    },
  },
  left: {
    backgroundRepeat: "no-repeat",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
  },
  right: {
    backgroundRepeat: "no-repeat",
    height: "100%",
    position: "absolute",
    top: "0",
    right: "0",
  },
  mainpage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    width: "100%",
    gap: "2rem",
  },
  invest: {
    backgroundColor: "#F9C300",
    color: theme.palette.text[50],
    fontSize: "12px",
    height: "25px",
    width: "218px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "DM_Sans",
    lineHeight: "15px",
    letterSpacing: "1px",
  },
  empower: {
    color: theme.palette.text[100],
    fontSize: "48px",
    fontWeight: "700",
    width: "70%",
    lineHeight: "60px",
    fontFamily: "IBM_Plex_Serif",
  },
  knowmore: {
    width: "189px",
    height: "52px",
    gap: "10px",
    borderRadius: "2px",
    opacity: "0px",
    fontWeight: "600",
    fontSize: "18px",
    backgroundColor: theme.palette.background.knowmore,
    textTransform: "none",
    color: theme.palette.text[50],
  },
  know: {
    fontFamily: "DM_sans",
  },
});
