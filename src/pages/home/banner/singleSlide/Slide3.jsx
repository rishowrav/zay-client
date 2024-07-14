import slide3 from "/assets/images/s3.jpg";

const Slide3 = () => {
  return (
    <section className="bg-[#EFEFEF]">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:w-[1116px] lg:h-[700px] mx-auto lg:pt-0 pt-10 ">
        <div className="lg:flex-1 space-y-4 lg:py-0 py-10 lg:px-0 px-5 ">
          <h1 className="text-5xl roboto-thin text-black">Repr in voluptate</h1>
          <h4 className="text-3xl roboto-light">Ullamco laboris nisi ut</h4>
          <p className="text-xl roboto-light">
            We bring you 100% free CSS templates for your websites. If you wish
            to support TemplateMo, please make a small contribution via PayPal
            or tell your friends about our website. Thank you.
          </p>
        </div>
        <figure className="lg:flex-1 w-full">
          <img className="lg:flex hidden" src={slide3} alt="slider" />
          <img
            className="lg:hidden flex w-[500px]  mx-auto"
            src={slide3}
            alt="slider"
          />
        </figure>
      </div>
    </section>
  );
};

export default Slide3;
