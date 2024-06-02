import leftArrow from "../assets/svg/leftArrow.svg";
import rightArrow from "../assets/svg/rightArrow.svg";
import certificateImage from "../assets/images/certificateImage.png";

const CertificateSection = () => {
  return (
    <section className="flex ">
      <div className="flex flex-col px-6 py-6 text-sm text-center justify-between gap-10">
        <div className="flex gap- 5 justify-center items-center text-2xl leading-8 text-neutral-100">
          <img
            loading="lazy"
            src={leftArrow}
            alt="Decorative Icon"
            className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]"
          />
          <h2 className="font-roco">
            Get Certified From India{"'"}s Biggest Beauty Plagtform
          </h2>
          <img
            loading="lazy"
            src={rightArrow}
            alt="Decorative Icon"
            className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]"
          />
        </div>{" "}
        <img src={certificateImage} alt="certificate Image" />
      </div>
    </section>
  );
};

export default CertificateSection;
