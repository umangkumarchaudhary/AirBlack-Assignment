import PeopleBackground from "../assets/images/PeopleBackground.png";
import leftArrow from "../assets/svg/leftArrow.svg";
import rightArrow from "../assets/svg/rightArrow.svg";
import instagram from "../assets/svg/instagram.svg";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import linkedin from "../assets/svg/linkedin.svg";

const Footer = () => {
  const scrollToSection = () => {
    document
      .getElementById("apply_now_section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="flex  relative ">
      <img
        src={PeopleBackground}
        alt="people background image"
        className="absolute z-0 object-cover w-full h-[296px]"
      />
      <div className="relative flex flex-col px-6 py-6   text-sm text-center  ">
        <div className="flex gap-5 justify-center items-center text-2xl leading-8 text-neutral-100">
          <img
            loading="lazy"
            src={leftArrow}
            alt="Decorative Icon"
            className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]"
          />
          <h2 className="font-roco">
            Join our growing community of 35,000+ alumni
          </h2>
          <img
            loading="lazy"
            src={rightArrow}
            alt="Decorative Icon"
            className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]"
          />
        </div>{" "}
        <button
          className="justify-center flex items-center px-16 py-2.5 mt-8 font-semibold rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50"
          type="button"
          onClick={scrollToSection}
        >
          Apply Now
        </button>
        <div className="flex flex-row justify-center items-center gap-4 mt-8">
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram icon" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="facebook icon" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a href="https://x.com/">
            <img src={twitter} alt="twitter icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
