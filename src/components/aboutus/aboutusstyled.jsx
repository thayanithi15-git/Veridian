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
    fontFamily: "DM_sans",
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
    fontSize: "14px",
    width: "60%",
    color: theme.palette.text[700],
    fontFamily: "DM_sans",
    "@media (max-width: 600px)": {
      width: "90%",
    },
  },
  veridianimg: {
    width: "30%",
    height: "100%",
    width: "300px",
    height: "200px",
    "@media (max-width: 600px)": {
      width: "250px ",
    },
  },
  sub_aboutus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  },
  Excellence: {
    backgroundColor: theme.palette.text[50],
    display: "flex",
    padding: "20px",
    height: "138px",
    boxShadow: "none",
    borderRadius: "0px",
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
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "IBM_Plex_Serif",
  },
  about_content: {
    fontSize: "14px",
    color: theme.palette.text[700],
    fontFamily: "DM_sans",
  },
  about_images: {
    width: "100px",
  },
});