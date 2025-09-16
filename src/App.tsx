import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Remocon from "./remocon.tsx";
import "swiper/css";

const slides = [
  { title: "Home", color: "#74c0fc" },
  { title: "About", color: "#ffd43b" },
  { title: "Projects", color: "#69db7c" },
  { title: "Contact", color: "#ff6b6b" },
];

function App() {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="Slide-ul" style={{ height: "100vh", position: "relative" }}>
      <Swiper
        onSwiper={(s) => setSwiper(s)} // 여기서 Swiper 인스턴스 state에 저장
        direction="vertical"
        slidesPerView={1}
        mousewheel
        speed={800}
        style={{ height: "100%" }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
                fontWeight: "bold",
                background: slide.color,
              }}
            >
              {slide.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Remocon에서 swiper state 사용 */}
      <Remocon slides={slides} swiper={swiper} />
    </div>
  );
}

// {/* <Slider slides={slides} /> */}
export default App;
