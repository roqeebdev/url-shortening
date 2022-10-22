const Hero = () => {
    return ( 
        <section id="">
<div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 gap-2 space-y-0 md:space-y-0 md:flex-row">
            <div className="flex flex-col mb-32 space-y-10 md:w-1/2">
                <h1 className="text-4xl font-bold text-veryDarkViolet text-left md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight">
                    More than just shorter links
                </h1>
                <p className="text-large text-darkGrayishBlue text-left lg:max-w-lg lg:text-xl lg:leading-8">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <div className="flex justify-center md:justify-start">
                    <button  className="bg-lightGreen p-3 px-6 pt-2 rounded-full text-white shadow-2xl baseline hover:bg-grey-900">
                        Get
                        Started</button>
                </div>
            </div>
            <div className="className md:w-1/2">
                <img src="/images/illustration-working.svg" alt="a working woman" />
            </div>
        </div>
</section>
     );
}
 
export default Hero;