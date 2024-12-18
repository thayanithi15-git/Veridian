export const AboutusStyledNew = (theme) => ({
  aboutuspage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainveridian: {
    backgroundColor: theme.palette.text[50],
    borderRadius: "0px",
    boxShadow: "none",
    display: "flex",
    fontFamily: theme.palette.fontfamily.dm_sans,
    padding: "3% 0%",
    justifyContent: "space-evenly",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  },
  mainveridiancontent: {
    display: "flex",
    alignItems: "center",
    textAlign: "start",
    fontSize: theme.palette.fontsize.small,
    width: "60%",
    color: theme.palette.text[700],
    fontFamily: theme.palette.fontfamily.dm_sans,
    "@media (max-width: 600px)": {
      width: "90%",
    },
  },
  veridianimg: {
    // width: "30%",
    width: "300px",
    height: "200px",
    "@media (maxWidth: 600px)": {
      width: "250px ",
    },
  },
  sub_aboutus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
    "@media (max-width: 600px)": {
      marginTop: "5%",
    },
  },
  Excellence: {
    backgroundColor: theme.palette.text[50],
    display: "flex",
    padding: "20px",
    height: "138px",
    boxShadow: "none",
    borderRadius: "0px",
    "@media (max-width: 600px)": {
      height: "100%",
    },
  },
  Excellence_content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
    textAlign: "start",
  },
  about_head: {
    display: "flex",
    color: theme.palette.text[800],
    fontSize: theme.palette.fontsize.large,
    fontWeight: theme.palette.fontweight.bold,
    fontFamily: theme.palette.fontfamily.ibm_plex,
  },
  about_content: {
    fontSize: theme.palette.fontsize.small,
    color: theme.palette.text[700],
    fontFamily: theme.palette.fontfamily.dm_sans,
  },
  about_images: {
    width: "100px",
  },
});
