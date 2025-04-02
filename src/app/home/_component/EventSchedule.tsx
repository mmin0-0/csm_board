"use client";
import * as style from "@/app/styles/pages/home.css";
import { SwiperSlide } from "swiper/react";
import { CustomSwiper, SwiperPagination } from "@/app/_component/Swiper";
import Link from "next/link";
import { ImgWrap } from "@/app/_component/ImgWrap";
import { Typography } from "@/app/_component/Typography";
import clsx from "clsx";

export default function EventSchedule() {
  const eventList = [
    {title: '제22회 대한민국 교육박람회', date: '2025.01.15 - 2025.01.17'},
    {title: '2024 금천 코딩박람회', date: '2024.05.25'},
    {title: '제21회 대한민국 교육박람회', date: '2024.01.17 - 2024.01.19'}
  ];
  return (
    <>
      <CustomSwiper
        className={style.EventSwiper}
        slidesPerView={1}
        centeredSlides={true}
        loop={false}
        direction="horizontal"
        navigationId="eventList"
        paginationId="eventList"
      >
        {eventList.map((event, idx) => (
          <SwiperSlide key={idx} className={style.EventItem}>
            <Link href="#">
              {/* <ImgWrap src={`/home/event_0${idx + 1}.jpg`} alt={event.title} className={style.EventPreview} /> */}
              <div className={style.EventInfo}>
                <Typography lineHeight="medium" weight="medium">{event.title}</Typography>
                <Typography size="small" lineHeight="medium">일시: {event.date}</Typography>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <SwiperPagination className={style.EventPagination} />
    </>
  );
}
