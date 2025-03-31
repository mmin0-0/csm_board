"use client";
import * as style from "@/app/styles/pages/home.css";
import { SwiperSlide } from "swiper/react";
import { CustomSwiper, SwiperButtons } from "@/app/_component/Swiper";

export default function EventSchedule() {
  const eventList = [
    { title: "11" },
    { title: "22" },
    { title: "33" },
    { title: "44" },
    { title: "55" },
  ];
  return (
    <>
      <CustomSwiper
        className={style.EventSwiper}
        spaceBetween={10}
        slidesPerView={4}
        // centeredSlides={true}
        loop={false}
        direction="horizontal"
        navigationId="eventList"
      >
        {eventList.map((event, idx) => {
          return <SwiperSlide key={idx} className={style.EventItem}>{event.title}</SwiperSlide>;
        })}
      </CustomSwiper>
      <SwiperButtons className={style.EventListControls} />
    </>
  );
}
