import { Slider } from "./slider.tsx";
import slideJson from "./image.json";

type Slide = {
  image: string;
  title: string;
  subTitle: string;
  interval: number;
};

const slides: Slide[] = slideJson;
// App
function App() {
  return <Slider slides={slides} />;
}

export default App;
