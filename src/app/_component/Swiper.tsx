'use client'
import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { SwiperProps } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MouseEventHandler } from "react";
import { Image } from "@/app/_component/ImgWrap";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

type SwiperBtnsProps = {
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
};
export const SwiperButtons = ({className, onClick}:SwiperBtnsProps) => {
  return (
    <div className={className}>
      <button className="swiper-button-prev" onClick={onClick}>
        <Image src="icon/prev_arrow_icon.svg" alt="이전" />
      </button>
      <button className="swiper-button-next"
      onClick={onClick}>
        <Image src="icon/next_arrow_icon.svg" alt="다음" />
      </button>
    </div>
  )
};

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
  allowTouchMove?: boolean;
  ref?: any;
  slidesPerView?: number;
  slidesPerGroup?: number;
  loop?: boolean;
  autoplayDelay?: number,
  navigationId?: string;
  pagination?: any;
  spaceBetween?: number;
  breakpoints?: { [width: number]: SwiperProps };
  progress?: boolean;
  cssMode?: boolean;
};

export function CustomSwiper({
  children,
  className,
  direction='horizontal',
  ref,
  slidesPerView = 1,
  slidesPerGroup = 1,
  loop = true,
  autoplayDelay = 4500,
  navigationId,
  pagination,
  spaceBetween = 0,
  breakpoints,
  cssMode = false
}:Props){
  return (
    <Swiper
      cssMode={false}
      className={className}
      direction={direction}
      allowTouchMove={false}
      ref={ref}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      pagination={pagination}
      navigation={
        navigationId ? {
          nextEl: `#${navigationId} .swiper-button-next`,
          prevEl: `#${navigationId} .swiper-button-prev`,
        } : false
      }
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      modules={[Autoplay, Pagination, Navigation]}
    >{children}</Swiper>
  )
}