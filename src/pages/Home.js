import Intro from "../components/Intro";
import Work from "./Work";
import { Fade } from "react-reveal";

function Home() {
  return (
    <Fade duration={4000}>
      <div className="container mx-auto">
        <Intro />
        <Work />
      </div>
    </Fade>
  );
}

export default Home;
