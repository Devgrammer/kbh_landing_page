
import SectionWrapper from '../sectionWrapper/SectionWrapper'
import SectionHeading from '../sectionHeading/SectionHeading';

const AboutSection = () => {
  return (
    <SectionWrapper id={"about"}>
      <SectionHeading text="ABOUT US" addClass=""/>
      <div className="content-contianer w-full flex space-x-4 items-center">
        <div className="content-left w-1/2">
          <img
            src="https://i.pinimg.com/1200x/f7/f1/df/f7f1df6075c2879092dcf078a6894fd5.jpg"
            alt="about"
            width={500}
          />
        </div>
        <div className="content-right w-1/3 font-normal text-justify">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection