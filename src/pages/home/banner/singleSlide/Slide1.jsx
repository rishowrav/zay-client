import slide1 from "/assets/images/s1.jpg";

const Slide1 = () => {
  return (
    <section className="bg-[#EFEFEF]">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:w-[1116px] lg:h-[700px]  lg:pt-0 pt-10  mx-auto ">
        <div className="lg:flex-1 space-y-4 lg:py-0 py-10 lg:px-0 px-5 ">
          <h1 className="text-5xl roboto-light text-[#59AB6E]">
            <span className="roboto-regular">Zay</span> eCommerce
          </h1>
          <h4 className="text-3xl roboto-light">
            Tiny and Perfect eCommerce Template
          </h4>
          <p className="text-xl roboto-light">
            Zay Shop is an eCommerce HTML5 CSS template with latest version of
            Bootstrap 5 beta 1. This template is 100% free provided by
            TemplateMo website. Image credits go to Freepik Stories, Unsplash
            and Icons 8.
          </p>
        </div>
        <figure className="lg:flex-1 w-full">
          <img className="lg:flex hidden" src={slide1} alt="slider" />
          <img
            className="lg:hidden flex w-[500px]  mx-auto"
            src={slide1}
            alt="slider"
          />
        </figure>
      </div>
    </section>
  );
};

export default Slide1;
