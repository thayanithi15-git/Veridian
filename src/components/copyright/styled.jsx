export const CopyrightStyledNew = (theme) => ({
  copy_main: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text[600],
    fontSize: "12px",
    fontFamily: "DM_sans",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      gap: "1rem",
    },
  },
});
