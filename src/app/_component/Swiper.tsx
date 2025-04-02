'use client'
import { ReactNode, useEffect, useRef } from "react";
import clsx from "clsx";
import { Swiper } from "swiper/react";
import { SwiperProps } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { MouseEventHandler } from "react";
import { Image } from "@/app/_component/ImgWrap";
import { SwiperComponent } from "@/app/styles/component/layout.css";

type SwiperPaginationProps = {
  className?: string,
  bullet?: 'default' | 'fraction' | 'progress',
};
export const SwiperPagination = ({className, bullet="default"}:SwiperPaginationProps) => {
  return (
    <div className={clsx(className, {
      "swiper-pagination": bullet === "default",
      "swiper-pagination-fraction": bullet === "fraction",
      "swiper-pagination-progressbar": bullet === "progress",
    })} />
  )
};

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
  autoplayDelay?: number;
  navigationId?: string;
  paginationId?: string;
  autoHeight?: boolean;
  spaceBetween?: number;
  centeredSlides?: boolean;
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
  paginationId,
  autoHeight,
  spaceBetween = 0,
  centeredSlides = false,
  breakpoints,
  cssMode = false
}:Props){
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <Swiper
      // cssMode={false}
      onSwiper={(swiper)=> {
        swiperRef.current = swiper;
      }}
      className={clsx(className, SwiperComponent)}
      direction={direction}
      allowTouchMove={false}
      ref={ref}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      observer={true}
      observeParents={true} 
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      pagination={
        paginationId ? { 
          el: `#${paginationId} .swiper-pagination`, 
          clickable: true 
      } : false}
      navigation={
        navigationId ? {
          nextEl: `#${navigationId} .swiper-button-next`,
          prevEl: `#${navigationId} .swiper-button-prev`,
        } : false
      }
      spaceBetween={spaceBetween}
      autoHeight={autoHeight}
      centeredSlides={centeredSlides}
      breakpoints={breakpoints}
      modules={[Autoplay, Pagination, Navigation]}
    >{children}</Swiper>
  )
}