import { useState, useRef } from "react";
import { styled } from "styled-components";

// type
interface ButtonProps {
  direction: "left" | "right";
}

interface BannerProps {
  color: string;
}

interface BannerBlockProps {
  page: number;
  left: any;
  right: any;
  length: number;
}

// App
function App() {
  // data
  const bannerData = ["black", "white", "blue"];

  // hook
  const [page, setPage] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const ref = useRef(null);
  const timer = useRef(null);

  //move
  const makeLeft = (page) => (page === 0 ? 3 : page - 1);
  const makeRight = (page) => (page === 3 ? 0 : page + 1);

  const moveLeft = () => {
    // 연속 넘김을 위해 타이머가 설정되어있으면 타이머를 초기화하고 바로 다음페이지로 넘어가줍니다.
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
      setPage((page) => makeLeft(page));
    }

    //동기적으로 order을 사용해야해서 사용한 패턴입니다.
    setPage((page) => {
      setLeft(makeLeft(page));
      return page;
    });

    ref.current.style.transition = "none";
    ref.current.style.left = "-100%";
    setTimeout(() => {
      ref.current.style.transition = "left 0.3s";
      ref.current.style.left = "0";
    });

    // 애니메이션 효과 지속시간인 0.3초 뒤에 실제 이동을 처리하고 추가된 가상요소를 삭제해줍니다.
    timer.current = setTimeout(() => {
      setLeft(null);
      setPage((page) => makeLeft(page));
      timer.current = null;
    }, 300);
  };

  const moveRight = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
      setPage((page) => makeRight(page));
    }
    setPage((page) => {
      setRight(makeRight(page));
      return page;
    });
    ref.current.style.transition = "none";
    ref.current.style.left = "0";
    setTimeout(() => {
      ref.current.style.transition = "left 0.3s";
      ref.current.style.left = "-100%"; //이동 방향이 반대이므로 위와 다릅니다.
    });
    timer.current = setTimeout(() => {
      setPage((page) => makeRight(page));
      timer.current = null;
    }, 300);
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

  const Container = styled.div`
    width: 100%;
    height: 400px;
    background: ${(props) => props.color};
    position: relative;
    overflow: hidden;
  `;

  const BannerBlock = styled.div<BannerBlockProps>`
    width: calc(${(props) => props.left + props.right + 1}*100vw);
    display: flex;
    position: absolute;
  `;

  return (
    <Container>
      <BannerBlock left={left} right={right} page={page} ref={ref}>
        {left ? (
          <Banner color={bannerData[makeLeft(page)]} key={0}>
            {makeLeft(page)}
          </Banner>
        ) : null}
        <Banner color={bannerData[page]} key={1}>
          {page}
        </Banner>
        {right ? (
          <Banner color={bannerData[makeRight(page)]} key={2}>
            {makeRight(page)}
          </Banner>
        ) : null}
      </BannerBlock>
      <Button direction={"left"} onClick={moveLeft}>
        왼쪽
      </Button>
      <Button direction={"right"} onClick={moveRight}>
        오른쪽
      </Button>
    </Container>
  );
}

export default App;
