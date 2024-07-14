import slide2 from "/assets/images/s2.jpg";

const Slide2 = () => {
  return (
    <section className="bg-[#EFEFEF]">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:w-[1116px]  lg:h-[700px]  mx-auto  lg:pt-0 pt-10">
        <div className="lg:flex-1 space-y-4 lg:py-0 py-10 lg:px-0 px-5 ">
          <h1 className="text-5xl roboto-thin text-black">Proident occaecat</h1>
          <h4 className="text-3xl roboto-light">
            Aliquip ex ea commodo consequat
          </h4>
          <p className="text-xl roboto-light">
            You are permitted to use this Zay CSS template for your commercial
            websites. You are not permitted to re-distribute the template ZIP
            file in any kind of template collection websites.
          </p>
        </div>
        <figure className="lg:flex-1 w-full">
          <img className="lg:flex hidden" src={slide2} alt="slider" />
          <img
            className="lg:hidden flex w-[500px]  mx-auto"
            src={slide2}
            alt="slider"
          />
        </figure>
      </div>
    </section>
  );
};

export default Slide2;
