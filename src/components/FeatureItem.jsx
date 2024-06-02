const FeatureItem = ({ iconSrc, iconAlt, description }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] rounded-full flex justify-center items-center w-9 h-9">
      <img
        loading="lazy"
        src={iconSrc}
        alt={iconAlt}
        className="self-center aspect-[0.97]"
      />
    </div>
    <div className="mt-2 text-sm font-medium w-24">{description}</div>
  </div>
);

export default FeatureItem;
