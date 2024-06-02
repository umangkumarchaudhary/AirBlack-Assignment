import star from "../assets/svg/star.svg";
import tick from "../assets/svg/tick.svg";
import badge from "../assets/svg/badge.svg";
import { features } from "../data/data";
import HeroForm from "./HeroForm";

const Badge = ({ imageSrc, text, imageAlt }) => (
  <div className="flex gap-2 px-3 py-1.5 rounded-md bg-white bg-opacity-10 leading-[103%] text-neutral-50">
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="flex-1 shrink-0 self-start w-full"
    />
    <span>{text}</span>
  </div>
);

const Rating = ({ text }) => (
  <div className="flex gap-1 py-px pr-5 my-auto text-right text-amber-300 rounded-xl leading-[120%]">
    <img
      loading="lazy"
      src={star}
      alt="star icon"
      className="flex-1 shrink-0 my-auto w-full aspect-[1.1]"
    />
    <span>{text}</span>
  </div>
);

const Feature = ({ text }) => (
  <div className="flex gap-2 pr-5 mt-2 leading-[120%] text-neutral-300 ">
    <img
      loading="lazy"
      src={tick}
      alt="tick icon"
      className="shrink-0 self-start w-4"
    />
    <span className="flex-1">{text}</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="py-5 px-6">
      <h1 className="w-4/5 pb-2 text-2xl leading-8 text-white font-roco">
        Professional Online Makeup Course
      </h1>
      <div className="flex gap-2.5 mt-2 text-xs">
        <Badge
          text="Certification Programme"
          imageAlt="bookmark icon"
          imageSrc={badge}
        />
        <Rating text="Rated 4.85/5" />
      </div>
      {features.map((feature, index) => (
        <Feature key={index} text={feature.text} />
      ))}

      <HeroForm />
    </section>
  );
};

export default HeroSection;
