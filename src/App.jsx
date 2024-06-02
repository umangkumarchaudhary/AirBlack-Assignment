import Lottie from "lottie-react";
import Home from "./pages/Home";
import github from "./assets/json/github.json";

const App = () => {
  return (
    <div className="min-h-screen md:max-w-[375px] md:m-auto lg:max-w-[375px] lg:m-auto bg-backgroundColor">
      <Home />
      <div className="fixed bottom-0 z-50 right-0">
        <a href="https://github.com/priyanshugarg1010/airblack" target="blank">
          <Lottie
            animationData={github}
            style={{ height: "100px" }}
            loop={true}
            height={10}
            width={10}
          />
        </a>
      </div>
    </div>
  );
};

export default App;
