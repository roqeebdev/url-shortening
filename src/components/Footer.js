const Footer = () => {
    return ( 
        <div className="bg-veryDarkViolet">
            <div className="container items-center p-6 text-center item-baseline mx-auto">
                <div className="grid grid-rows-1 mt-10 mb-15 space-y-6 md:grid-cols-5">
                <div className="pt-2" >
                    <img  src="/images/logo2.svg"  alt="logo" />
                </div>
                
                <div className="flex flex-col items-start space-y-3 text-white">
                    <a href="features" className="font-semibold">Features</a>
                    <a href="shortening" className="font-thin">Link Shortning</a>
                    <a href="features" className="font-thin">Branded Links</a>
                    <a href="shortening" className="font-thin">Analytics</a> 
                </div>
                <div className="flex flex-col items-start space-y-3 text-white">
                    <a href="features" className="font-semibold">Resources</a>
                    <a href="shortening" className="font-thin">Blog</a>
                    <a href="features" className="font-thin">Developers</a>
                    <a href="shortening" className="font-thin">Support</a> 
                </div>
                <div className="flex flex-col items-start space-y-3 text-white">
                    <a href="features" className="font-semibold">Company</a>
                    <a href="shortening" className="font-thin">About</a>
                    <a href="features" className="font-thin">Our Team</a>
                    <a href="shortening" className="font-thin">Careers</a> 
                    <a href="shortening" className="font-thin">Contact</a>
                </div>
                <div className="flex flex-row items-start pt-5 space-x-6 text-white">
                    <img src="/images/icon-facebook.svg" alt="" />
                    <img src="/images/icon-twitter.svg" alt="" />
                    <img src="/images/icon-pinterest.svg" alt="" />
                    <img src="/images/icon-instagram.svg" alt="" />
                </div>
                </div>

            </div>

        </div>
     );
}
 
export default Footer;