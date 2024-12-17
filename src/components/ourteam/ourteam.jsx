import React from "react";
import { OurteamStyledNew } from "./ourteamstyled";
import { lighttheme } from "../../theme/themeprovider";
import { SlideStore } from "../zustand/store";
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Pagination]);

export default function Ourteam() {
  const OurteamStyled = OurteamStyledNew(lighttheme);
  const slidesdetails = SlideStore((state) => state.slides);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={isMobile ? 0 : -100}
      navigation={isMobile ? false : true}
      pagination={isMobile ? { clickable: true } : false}
      modules={isMobile ? [Pagination] : [Navigation, Pagination]}
      className="mySwiper"
      style={isMobile ? OurteamStyled.swipercomSmall : OurteamStyled.swipercom}>
      {slidesdetails.map((slide) => (
        <SwiperSlide key={slide.id} style={OurteamStyled.swiperslide}>
          <Box
            sx={
              isMobile
                ? OurteamStyled.parallelogramContainerSmall
                : OurteamStyled.parallelogramContainer
            }>
            <img
              src={slide.image}
              alt={slide.name}
              style={
                isMobile
                  ? OurteamStyled.parallelogramImageSmall
                  : OurteamStyled.parallelogramImage
              }
            />
            <Box
              sx={
                isMobile ? OurteamStyled.subteamSmall : OurteamStyled.subteam
              }>
              <Box sx={OurteamStyled.subteamcontent}>
                <Typography sx={OurteamStyled.contentHeading}>
                  {slide.name}
                </Typography>
                <Typography sx={OurteamStyled.contentSubHeading}>
                  {slide.title}
                </Typography>
              </Box>
            </Box>
            <Box sx={OurteamStyled.parallelogramContent}>
              <Typography sx={OurteamStyled.contentParagraph}>
                {slide.description1}
                <br />
                <br />
                {slide.description2}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
