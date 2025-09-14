import "./App.css";
import { Slider } from "./slider.tsx";
import slideJson from "./image.json";

export type SlideType = {
  image: string;
  title: string;
  subTitle: string;
  interval: number;
};

const slides: SlideType[] = slideJson;
// App
function App() {
  return <Slider slides={slides} />;
}

export default App;
