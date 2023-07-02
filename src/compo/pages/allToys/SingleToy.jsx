/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SingleToy = ({ toyData }) => {
    // eslint-disable-next-line no-unused-vars
    let { _id, picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detaillDescription, catagory } = toyData
    return (
        <div>
            <div  className="flex flex-col items-center border-2 p-1 gap-3">
                <div className="grid justify-center " data-aos='zoom-in'>
                    <img src={picture} alt="" className="h-[300px]  w-auto object-cover bg-gray-200 rounded-sm" />
                </div>
                <div className="capitalize w-full h-full flex flex-col justify-between gap-3 px-2">
                    <div className="bg-gray-100 w-full py-3 px-2 min-h-[250px]">
                        <p className="font-bold">name: {toyName}</p>
                        <p>catagory: {catagory}</p>
                        <p>rating: {rating}</p>
                        <p className="">price: {price}</p>
                        <p className="mb-3">seller name: {sellerName}</p>
                    </div>

                    <div className="self-cente w-full flex justify-center">
                        <Link to={`/detaill/${_id}`} className="bg-red-500 rounded-md p-2   text-center">show detaill</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleToy;