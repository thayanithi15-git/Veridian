export const getHomeStyled = (theme) => ({
  main: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    "@media (max-width: 960px)": {
      height: "100%",
      width: "100%"
    }
  },
  header: {
    backgroundColor: theme.palette.text[50],
    borderBottom: `2.5px solid ${theme.palette.text[400]}`,
    height: "16.7%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: theme.palette.text[50],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  },
});
    