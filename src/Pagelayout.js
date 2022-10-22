import CtaSection from "./components/CtaSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Search from "./components/Search";

const Pagelayout = () => {
    return ( 
        <div>
            <Nav/>
            <Hero/>
            <Search/>
            <Features/>
            <CtaSection/>
            <Footer/>
        </div>
     );
}
 
export default Pagelayout;