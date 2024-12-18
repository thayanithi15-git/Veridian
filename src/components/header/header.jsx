import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { HeaderStyledNew } from "./headerstyled";
import { useNavigate } from "react-router-dom";
import { useStore } from "../zustand/store";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import { lighttheme } from "../../theme/themeprovider";

export default function Header() {
  const headers = [
    "Home",
    "About us",
    "Our Team",
    "Investment Approach",
    "Contact Us",
  ];

  const [menu, setMenu] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const HeaderStyled = HeaderStyledNew(lighttheme);

  const handleShowmenu = (event) => {
    event.stopPropagation();
    setMenu((prevMenu) => !prevMenu);
  };

  const {
    title,
    setTitle,
    HomeRef,
    aboutUsRef,
    ourTeamRef,
    investmentsRef,
    footerRef,
  } = useStore();

  const navigate = useNavigate();

  const handleTitles = (titles) => {
    setMenu(false);
    setTitle(titles);
    switch (titles) {
      case "Home":
        HomeRef?.current.scrollIntoView({ behavior: "smooth" });
        navigate("/");
        break;
      case "About us":
        aboutUsRef?.current.scrollIntoView({ behavior: "smooth" });
        navigate("/aboutus");
        break;
      case "Our Team":
        ourTeamRef?.current.scrollIntoView({ behavior: "smooth" });
        navigate("/ourteam");
        break;
      case "Investment Approach":
        investmentsRef?.current.scrollIntoView({ behavior: "smooth" });
        navigate("/investmentapproach");
        break;
      case "Contact Us":
        footerRef?.current.scrollIntoView({ behavior: "smooth" });
        navigate("/contactus");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={HeaderStyled.main}>
      <Box sx={HeaderStyled.logocon}>
        <img src={Logo} />
      </Box>
      <Box sx={HeaderStyled.titles}>
        {headers.map((titles) => (
          <Box key={titles}>
            <Box
              onClick={() => handleTitles(titles)}
              sx={
                title === titles
                  ? HeaderStyled.titleclicked
                  : HeaderStyled.title
              }>
              {titles}
            </Box>
            <Box
              sx={
                title === titles ? HeaderStyled.line : HeaderStyled.lineHidden
              }></Box>
          </Box>
        ))}
      </Box>
      <Box
        onClick={handleShowmenu}
        style={
          isMobile ? HeaderStyled.menuiconshow : HeaderStyled.menuiconhide
        }>
        {menu ? <FaTimes /> : <FaBars />}
      </Box>

      {menu ? (
        <Box sx={HeaderStyled.titlesresponse}>
          {headers.map((titles) => (
            <Box key={titles}>
              <Box
                onClick={() => handleTitles(titles)}
                sx={
                  title === titles
                    ? HeaderStyled.titleclicked
                    : HeaderStyled.title
                }>
                {titles}
              </Box>
              <Box
              ></Box>
            </Box>
          ))}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
