import { Link } from "react-router-dom";
import shopb from '../../../../assets/shop-b.png'
import { BiMap } from "react-icons/bi";
const VisitStore = () => {
    return (
        <div className="min-h-[300px] flex flex-col gap-5 text-center py-5 relative bg-gray-50">
            <img src={shopb} alt=""  className="absolute hidden md:block top-0 left-[40px] h-[200px] -rotate-45 opacity-5"/>
            <h1 className="text-3xl font-semibold">visit our toys store</h1>
            <p>You can get Various discounts on out store <br></br>
            you are alway welcome
            </p>
            <img src={shopb} alt=""  className="absolute bottom-0 md:right-[40px] h-[300px] rotate-45 opacity-5"/>
            <Link to={'/spinner'} className="bg-red-500 px-5 py-2 rounded-2xl self-center flex items-center text-gray-200"><BiMap className="text-3xl text-gray-200"></BiMap> Show location on map</Link>
        </div>
    );
};

export default VisitStore;