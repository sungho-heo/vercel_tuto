interface RemoconProps {
  slides: { title: string; color: string }[];
  swiper: any; // 이제 ref 대신 state
}
export default function Remocon({ slides, swiper }: RemoconProps) {
  const handleGoTo = (index: number) => {
    if (swiper) {
      swiper.slideTo(index, 800); // 클릭 시 부드럽게 이동
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 10,
      }}
    >
      {slides.map((slide, idx) => (
        <button
          key={idx}
          onClick={() => handleGoTo(idx)}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "2px solid #333",
            background: "#fff",
            color: "#333",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {slide.title[0]}
        </button>
      ))}
    </div>
  );
}
