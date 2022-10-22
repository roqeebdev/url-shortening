const Features = () => {
  return (
    <div className="bg-gray -mt-20">
      <div className="container  p-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-20 mt-20">
          <h2 className="font-bold text-veryDarkViolet text-5xl">
            Advanced Statistics
          </h2>
          <p className="text-grayishViolet text-base md:text-lg md:max-w-xl">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col w-full lg:flex-row relative">
          <div className="z-10 flex flex-col items-center w-full h-64 px-6 mb-20 bg-white rounded-lg text-center md:h-52 lg:text-left lg:items-start lg:w-1/3 lg:h-72 xl:h-60">
            <div className="rounded-full bg-darkViolet w-20 h-20 -mt-10 mb-2 flex flex-row justify-center">
              <img
                src="images/icon-brand-recognition.svg"
                className="w-9 object-contain"
                alt="brand recognition icon"
              />
            </div>

            <h4 className="font-bold text-veryDarkViolet text-xl mt-5 mb-4">
              Brand Recognition
            </h4>
            <p className="text-grayishViolet w-full text-base">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="vertical-line absolute z-0 left-1/2 w-2 -translate-x-1 top-64 h-10 bg-cyan md:top-52"></div>

          <div className="z-10 flex flex-col items-center w-full h-64 px-6 mb-20 bg-white rounded-lg text-center md:h-52 lg:text-left lg:items-start lg:w-1/3 lg:mx-8 lg:h-72 lg:mt-12 xl:h-60">
            <div className="rounded-full bg-darkViolet w-20 h-20 -mt-10 mb-2 flex flex-row justify-center">
              <img
                src="images/icon-detailed-records.svg"
                className="w-9 object-contain"
                alt="brand recognition icon"
              />
            </div>

            <h4 className="font-bold text-veryDarkViolet text-xl mt-5 mb-4">
              Detailed Records
            </h4>
            <p className="text-grayishViolet w-full text-base">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="vertical-line absolute z-0 left-1/2 w-2 -translate-x-1 top-[37rem] h-10 bg-cyan md:top-[31rem] lg:top-32 lg:left-[35.5rem] xl:top-40 xl:left-[740px] lg:w-8 lg:h-2"></div>

          <div className="z-10 flex flex-col items-center w-full h-64 px-6 mb-20 bg-white rounded-lg text-center md:h-52 lg:text-left lg:items-start lg:w-1/3 lg:h-72 lg:mt-24 xl:h-60">
            <div className="rounded-full bg-darkViolet w-20 h-20 -mt-10 mb-2 flex flex-row justify-center">
              <img
                src="images/icon-fully-customizable.svg"
                className="w-9 object-contain"
                alt="brand recognition icon"
              />
            </div>

            <h4 className="font-bold text-veryDarkViolet text-xl mt-5 mb-4">
              Fully Customizable
            </h4>
            <p className="text-grayishViolet w-full text-base">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
