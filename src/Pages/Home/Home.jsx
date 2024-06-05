import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import OurClient from "./OurClient";
import OurProduct from "./OurProduct";
import OurService from "./OurService";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Gallery/>
           <About/>
           <OurProduct/>
           <OurService/>
           <OurClient/>
        </div>
    );
};

export default Home;