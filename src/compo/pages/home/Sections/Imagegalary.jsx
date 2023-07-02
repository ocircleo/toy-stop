import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Loading from "../../../private/loading/Loading";
// eslint-disable-next-line react/prop-types
const Imagegalary = ({ toysData, loading }) => {
    useEffect(() => {
        Aos.init({
            duration: 400
        })
    }, [])
    return (
        <>        {

            loading ? <Loading /> : <>
                <div className="w-full border-2 my-4 rounded flex  flex-nowrap md:grid grid-flow-row grid-cols-2 lg:grid-cols-4  gap-5 p-2 overflow-x-scroll md:overflow-hidden">
                    {
                        // eslint-disable-next-line react/prop-types
                        toysData.map(element => {
                            return (
                                <div className=" p-3 h-auto md:w-full md:h-auto bg-gray-100 flex-shrink-0 rounded-md" key={element._id}>
                                    <img src={element.picture} className="h-[250px] lg:h-[200px] md:w-full max-w-[350px] object-cover rounded " data-aos='zoom-in' alt="" />
                                    <p className="capitalize font-semibold text-center">{element.toyName}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </>
        }
        </>



    );
};

export default Imagegalary;