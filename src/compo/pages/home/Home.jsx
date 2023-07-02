
import WelcomeHome from "./Sections/WelcomeHome";
import Toystab from "./Sections/Toystab";
import WhyBuyFromUsHome from "./Sections/WhyBuyFromUsHome";
import useTitle from "../../shared/Title/useTitle";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Imagegalary from "./Sections/Imagegalary";
import VisitStore from "./Sections/VisitStore";
const Home = () => {
    const [toysData, setToysData] = useState([])
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        Aos.init({
            duration: 400
        })
        fetch('https://assignment-11-server-sigma-green.vercel.app/toys').then(res => res.json()).then(data => {
            setToysData(data)
            setLoading(false)
        })
    }, [])
    useTitle('home')
    return (
        <div className="container p-5 mx-auto">

            <WelcomeHome></WelcomeHome>
            <Toystab toysData={toysData} loading={loading}></Toystab>
            <WhyBuyFromUsHome></WhyBuyFromUsHome>
            <h2 className="text-center text-3xl font-bold py-5 capitalize">Our toys image galary</h2>
            <Imagegalary toysData={toysData} loading={loading}></Imagegalary>
            <VisitStore></VisitStore>
        </div>

    );
};

export default Home;