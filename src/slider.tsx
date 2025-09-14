import { Swiper, SwiperSlide } from "swiper/react";
import type { SlideType } from "./App.tsx";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// props 타입 정의
interface SliderProps {
  slides: SlideType[];
}

export const Slider = ({ slides }: SliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel]}
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={50}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
