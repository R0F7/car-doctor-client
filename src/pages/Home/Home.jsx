import About from "../../components/About";
import Services from "../../components/Services";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;