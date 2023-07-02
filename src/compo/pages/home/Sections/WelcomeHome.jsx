
import imgbanner from "../../../../assets/toybanner.jpg"
import { Link } from "react-router-dom";
const WelcomeHome = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  p-3">
                <div className="flex flex-col items-start justify-center gap-5" data-aos='zoom-in'>
                    <h2 className="text-3xl capitalize">welcome to <span className=" text-red-500 font-bold">toy stop</span></h2>
                    <p>Nurturing minds, one toy at a time. Discover endless possibilities with our educative toys, inspiring young minds to learn, explore, and grow through play.</p>
                    <Link to={'/alltoys'} className="bg-yellow-500 rounded-md p-3">All toys</Link>
                </div>
                <div className="h-[300px]" data-aos="slide-left">
                    <img src={imgbanner} alt="" className="h-full w-full object-cover rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default WelcomeHome;