import { Swiper, SwiperSlide } from "swiper/react";
import type { SlideType } from "./App.tsx";
import { Navigation, Pagination, Mousewheel, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";

// props 타입 정의
interface SliderProps {
  slides: SlideType[];
}

export const Slider = ({ slides }: SliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Scrollbar]}
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={50}
      mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }} // ✅ 스크롤바 추가
      style={{ height: "100vh" }} // ✅ 컨테이너 높이 지정 필수
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
