export const HeaderStyledNew = (theme) => ({
  main: {
    fontFamily: theme.palette.fontfamily.ibm_plex,
    width: "90%",
    display: "flex",
    gap: "20rem",
    alignItems: "center",
    "@media (min-width: 1540px)": {
      width: "1200px",
    },
    "@media (max-width: 600px)": {
      gap: "60%"
    },
    "@media (max-width: 960px) and (min-width: 600px)": {
      gap: "80%",
    },
  },
  logocon: {},
  titles: {
    display: "flex",
    gap: "2rem",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  titleclicked: {
    color: theme.palette.background.primary.main,
    fontWeight: theme.palette.fontweight.bold,
    fontSize: theme.palette.fontsize.large,
    cursor: "pointer",
    "@media (max-width: 960px)": {
      marginLeft: "6%",
    },
  },
  title: {
    cursor: "pointer",
    fontWeight: theme.palette.fontweight.bold,
    fontSize: theme.palette.fontsize.large,
    color: "#51585E",
    "&:hover": {
      color: "#009065",
    },
    "@media (max-width: 960px)": {
      marginLeft: "6%",
    },
  },
  line: {
    width: "100%",
    height: "10%",
    marginTop: "2%",
    backgroundColor: "#009065",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
  lineHidden: {
    transform: "scaleX(0)",
    opacity: 0,
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
  titlesresponse: {
    display: "none",
    "@media (max-width: 960px)": {
      width: "100% ",
      height: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      position: "absolute",
      marginTop: "110px",
      top: "0",
      left: "0",
      zIndex: "1",
      backgroundColor: "white",
    },
  },
  menuiconshow: {
    display: "flex",
  },
  menuiconhide: {
    display: "none",
  },
}
)