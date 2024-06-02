import { useState } from "react";
import {
  careerGoalsOptions,
  countryCodeOptions,
  indianCityOptions,
  professionOptions,
} from "../data/data";
import toast from "react-hot-toast";
import SelectInput from "./SelectInput";

const InputLabel = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="mt-2.5 text-sm text-neutral-600">
    {children}
  </label>
);

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsappNumber: "",
    countryCode: "91",
    profession: "",
    goal: "",
    city: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.city &&
      formData.countryCode &&
      formData.name &&
      formData.whatsappNumber &&
      formData.countryCode &&
      formData.goal
    ) {
      console.log(formData);
      setFormData({
        name: "",
        whatsappNumber: "",
        countryCode: "91",
        profession: "",
        goal: "",
        city: "",
      });
      toast.success("Find Your Data In Console");
    } else {
      toast.error("Fill Complete Form");
    }
  };

  return (
    <section className="flex flex-col self-stretch py-6" id="apply_now_section">
      <header className="justify-center flex p-1.5 text-xs font-semibold leading-4 text-white uppercase bg-pink-500 rounded-t-xl">
        Fill the form below to enquire
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex z-10 flex-col px-2.5 pb-2.5 w-full text-sm font-semibold leading-4 bg-white rounded-b-xl"
      >
        <InputLabel htmlFor="name">*Enter your name</InputLabel>
        <input
          id="name"
          type="text"
          placeholder="Eg. Aneesha Mehra"
          value={formData.name}
          onChange={handleChange}
          className="px-3 pt-2 pb-2 mt-3 bg-white placeholder:text-stone-300 placeholder:font-normal focus:outline-none rounded border border-solid border-zinc-300 text-neutral-600 w-full"
        />
        <InputLabel htmlFor="whatsappNumber">
          *Enter your WhatsApp Number
        </InputLabel>
        <div className="flex gap-3 mt-3">
          <SelectInput
            id="countryCode"
            placeholder="91+"
            className="mt-0 px-1"
            options={countryCodeOptions}
            value={formData.countryCode}
            onChange={handleChange}
          />
          <input
            id="whatsappNumber"
            type="text"
            placeholder="Eg. 0000000000"
            maxLength={10}
            value={formData.whatsappNumber}
            onChange={handleChange}
            pattern="\d{10}"
            className="px-3 pt-2 pb-2 bg-white decoration-none placeholder:text-stone-300 placeholder:font-normal focus:outline-none rounded border border-solid border-zinc-300 text-neutral-600 w-full"
            onInput={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9]/g, "")
                .slice(0, 10);
            }}
          />
        </div>
        <InputLabel htmlFor="profession">*Select your profession</InputLabel>
        <SelectInput
          id="profession"
          placeholder="Choose the most relevant option"
          options={professionOptions}
          value={formData.profession}
          onChange={handleChange}
        />
        <InputLabel htmlFor="goal">*Select your goal</InputLabel>
        <SelectInput
          id="goal"
          placeholder="Choose the most relevant option"
          options={careerGoalsOptions}
          value={formData.goal}
          onChange={handleChange}
        />
        <InputLabel htmlFor="city">*Select your city</InputLabel>
        <SelectInput
          id="city"
          placeholder="Choose the most relevant option"
          options={indianCityOptions}
          value={formData.city}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="justify-center items-center px-16 py-2.5 mt-5 font-bold text-center whitespace-nowrap rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default HeroForm;
