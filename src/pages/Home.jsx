import AirblackBeautyClubLogo from "../assets/svg/AirblackBeautyClubLogo.svg";
import TopBackgroundPeople from "../assets/images/TopBackgroundPeople.png";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CertificateSection from "../components/CertificateSection";
import ApplyNowSection from "../components/ApplyNowSection";

const Home = () => {
  return (
    <main className="">
      <header className="relative">
        <img
          src={TopBackgroundPeople}
          alt="background image"
          className="absolute z-0 object-cover w-full h-[124px]"
        />
        <div className="px-6 pt-9 pb-7 z-10 relative">
          <div className="flex flex-col justify-center items-center">
            <img src={AirblackBeautyClubLogo} alt="logo" />
            <span className="mt-3 text-xs font-medium text-white uppercase tracking-[2.23px]">
              presents
            </span>
          </div>
        </div>
      </header>

      <HeroSection />
      <ApplyNowSection />
      <CertificateSection />
      <Footer />
    </main>
  );
};

export default Home;
