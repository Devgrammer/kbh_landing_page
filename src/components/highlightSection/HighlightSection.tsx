import SectionWrapper from "../sectionWrapper/SectionWrapper";
import SectionHeading from "../sectionHeading/SectionHeading";
import HighLightCard from "../highlightCard/HighLightCard";
import Marquee from "react-fast-marquee";

const HighlightSection = () => {
  console.log("check", Marquee);
  const JMarquee = "default" in Marquee ? Marquee.default : Marquee;
  const RMarquee = JMarquee as React.FC<{
    children?: React.ReactNode;
    className: string;
    speed?: number;
    pauseOnHover?: boolean;
    autoFill?: boolean;
    direction?: string;
    gradient?: boolean;
    gradientWidth?: number | string;
    // Add other props as needed
  }>;
  return (
    <SectionWrapper id="highlight">
      <SectionHeading text="Highlight" addClass="" />
      <div className=" space-y-4 w-full  h-full  ">
        <RMarquee
          className=""
          autoFill={true}
          pauseOnHover={true}
          direction="left"
        >
          <HighLightCard />
        </RMarquee>
        <RMarquee
          className=""
          autoFill={true}
          pauseOnHover={true}
          direction="right"
        >
          <HighLightCard />
        </RMarquee>
        <RMarquee
          className=""
          autoFill={true}
          pauseOnHover={true}
          direction="left"
        >
          <HighLightCard />
        </RMarquee>
      </div>
    </SectionWrapper>
  );
};

export default HighlightSection;
