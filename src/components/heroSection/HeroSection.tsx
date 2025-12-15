import { useTranslation } from "react-i18next";
import { FiChevronsDown } from "react-icons/fi";
import SectionWrapper from "../sectionWrapper/SectionWrapper";
const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper id={"home"}>
      <p className="welcome-mantra text-5xl">|| स्वागतम ||</p>
      <img
        className="flex mx-auto z-10 "
        src="/images/ganesha.png"
        alt=""
        width={400}
      />
      <div className="slokha-container space-y-2">
        <div className="welcome-mantra text-4xl font-bold mx-auto">
          {t(($) => $["Vakrtunda"])}
        </div>
        <div className="welcome-mantra text-lg font-normal mx-auto">
          "घुमावदार सूंड वाले, विशाल शरीर काय, करोड़ सूर्य के समान महान
          प्रतिभाशाली। मेरे प्रभु, हमेशा मेरे सारे कार्य बिना विघ्न के पूरे
          करें"
        </div>
      </div>

      <a
        href={"#about"}
        className="h-12 w-12 cursor-pointer mx-auto mt-4 rounded-full p-2 ring-1 flex justify-center items-center animate-bounce"
      >
        <FiChevronsDown />
      </a>
      <img
        src="/images/mandala.png"
        alt="mandala"
        className="absolute top-30 left-[40%] overflow-clip opacity-30 animate-spin [animation-duration:6.5s]"
        width={300}
      />
    </SectionWrapper>
  );
};

export default HeroSection;
