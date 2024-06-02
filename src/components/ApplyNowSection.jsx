import PeopleBackground from "../assets/images/PeopleBackground.png";
import leftArrow from "../assets/svg/leftArrow.svg";
import rightArrow from "../assets/svg/rightArrow.svg";
import { applyNowfeatures } from "../data/data";
import FeatureItem from "./FeatureItem";

const ApplyNowSection = () => {
  const scrollToSection = () => {
    document
      .getElementById("apply_now_section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="flex  relative justify-center items-center">
      <img
        src={PeopleBackground}
        alt="people background image"
        className="absolute z-0 object-cover w-full h-[296px]"
      />
      <div className="relative flex flex-col px-6 py-6   text-sm text-center  w-full">
        <div className="flex gap-5 justify-center items-center text-2xl leading-8 text-neutral-100">
          <img
            loading="lazy"
            src={leftArrow}
            alt="Decorative Icon"
            className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]"
          />
          <h2 className="font-roco">Why Should You Join Airblack?</h2>
          <img
            loading="lazy"
            src={rightArrow}
            alt="Decorative Icon"
            className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]"
          />
        </div>{" "}
        <div className="flex justify-between mt-8 text-white">
          {applyNowfeatures.map((feature, index) => (
            <FeatureItem
              key={index}
              iconSrc={feature.iconSrc}
              iconAlt={feature.iconAlt}
              description={feature.description}
            />
          ))}
        </div>
        <button
          className="justify-center flex items-center px-16 py-2.5 mt-8 font-semibold rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50"
          type="button"
          onClick={scrollToSection}
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default ApplyNowSection;
