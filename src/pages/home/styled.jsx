export const getHomeStyled = (theme) => ({
  main: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
  },
  header: {
    backgroundColor: theme.palette.text[50],
    borderBottom: "2.5px solid #CACFDB",
    height: "16.7%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: theme.palette.text[50],
    // height: "83.3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  },
});
    