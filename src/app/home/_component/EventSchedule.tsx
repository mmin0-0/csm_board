"use client";
import * as style from "@/app/styles/pages/home.css";
import { SwiperSlide } from "swiper/react";
import { CustomSwiper, SwiperButtons } from "@/app/_component/Swiper";
import { Typography } from "@/app/_component/Typography";
import { useRef } from "react";

export default function EventSchedule() {
  const swiperRef = useRef<any>(null);
  const eventList = [
    { title: "11" },
    { title: "22" },
    { title: "33" },
    { title: "44" },
    { title: "55" },
    // { title: "66" },
  ];
  return (
    <div id="eventList">
      <CustomSwiper
        cssMode={true}
        ref={swiperRef}
        slidesPerView={4}
        slidesPerGroup={1}
        direction="horizontal"
        spaceBetween={10}
        navigationId="eventList"
        loop={false}
      >
          <SwiperSlide>
            <Typography>dd</Typography>
            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magni aperiam explicabo asperiores qui fuga et non quas delectus atque? Ea odio sint dolorem quam. Voluptas vero ad eos dolores?</Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography>dd</Typography>
            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magni aperiam explicabo asperiores qui fuga et non quas delectus atque? Ea odio sint dolorem quam. Voluptas vero ad eos dolores?</Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography>dd</Typography>
            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magni aperiam explicabo asperiores qui fuga et non quas delectus atque? Ea odio sint dolorem quam. Voluptas vero ad eos dolores?</Typography>
          </SwiperSlide>
      </CustomSwiper>
      <SwiperButtons />
    </div>
  );
}
