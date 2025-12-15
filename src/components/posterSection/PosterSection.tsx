import SectionWrapper from '../sectionWrapper/SectionWrapper';


const PosterSection = () => {
  return (
    <SectionWrapper id="poster">
      <div className="poster-img w-full h-96 bg-cover place-content-end p-8 rounded-xl bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1730175602795-138827f9623f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <div className="poster-content">
          <div className="slogan text-white text-4xl font-medium uppercase tracking-[0.3em]">
            "Apko kam hmara bharosa"
          </div>
          <div className="slogan text-white text-lg font-medium uppercase">
            "Apko kam hmara bharosa"
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PosterSection