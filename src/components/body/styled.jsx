export const BodyStyledNew = (theme) => ({
  mainsite: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    height: "100vh",
    "@media (min-width: 1540px)": {
      width: "1200px",
    },
  },
  main: {
    width: "90%",
    "@media (max-width: 960px)": {
      width: "100%",
    },
  },
  details: {
    backgroundColor: theme.palette.background.primary.lite,
  },

  aboutus: {
    backgroundColor: theme.palette.background.primary.lite,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%  ",
  },
  aboutusword: {
    fontWeight: theme.palette.fontweight.bold,
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "30px 0px",
    fontSize: theme.palette.fontsize.verylarge,
    color: theme.palette.text[800],
    fontFamily: theme.palette.fontfamily.ibm_plex,
  },
  insidedesc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%  ",
  },

  about_images_in: {
    padding: "0% 0% 0% 3%",
    width: "100px",
  },
  ourteam: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2%",
  },
  ourteamnew: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  outteamtopic: {
    color: theme.palette.text[800],
    fontSize: theme.palette.fontsize.verylarge,
    fontWeight: theme.palette.fontweight.thickbold,
    fontFamily: theme.palette.fontfamily.ibm_plex,
    marginTop: "3%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  footerpage: {
    width: "100%",
  },
  copyright: {
    backgroundColor: theme.palette.text[100],
    border: `2px solid ${theme.palette.text[400]}`,
    width: "100%",
    padding: "1% 0%",
    marginTop: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
