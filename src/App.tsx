import { useState } from "react";
import { styled } from "styled-components";

// type
interface ButtonProps {
  direction: "left" | "right";
}

interface BannerProps {
  color: string;
}
function App() {
  // main
  const [page, setPage] = useState(0);

  const moveLeft = () => {
    setPage(page === 0 ? bannerData.length - 1 : page - 1);
  };

  const moveRight = () => {
    setPage(page === bannerData.length - 1 ? 0 : page + 1);
  };

  // styled
  const Banner = styled.div<BannerProps>`
    width: 100%;
    height: 400px;
    background: ${(props) => props.color};
    position: relative;
  `;

  const Button = styled.button<ButtonProps>`
    width: 50px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    ${(props) => (props.direction === "left" ? "left: 100px" : "right: 100px")};
  `;

  const bannerData = ["black", "white", "blue"];

  return (
    <Banner color={bannerData[page]}>
      <Button direction={"left"} onClick={moveLeft}>
        왼쪽
      </Button>
      <Button direction={"right"} onClick={moveRight}>
        오른쪽
      </Button>
    </Banner>
  );
}

export default App;
