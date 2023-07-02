
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../shared/Title/useTitle";


const Detaill = () => {
    useTitle('Detaill')
    const data = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    let { _id, picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detaill, catagory } = data
    console.log(data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center  border-2 p-1 gap-3 md:gap-0">
            <div className="grid justify-center ">
                <img src={picture} alt="" className="max-h-[400px] w-auto object-cover bg-gray-200 rounded-sm" />
            </div>

            <div className="capitalize grid items-center justify-center bg-gray-100 p-3">
                <p className="font-bold capitalize">name: {toyName}</p>
                <p> <span className="font-semibold capitalize">catagory:</span>  {catagory}</p>
                <p><span className="font-semibold capitalize">rating:</span> {rating}</p>
                <p><span className="font-semibold capitalize">available Quantity:</span> {availableQuantity}</p>
                <p><span className="font-semibold capitalize">seller Name:</span> {sellerName}</p>
                <p><span className="font-semibold capitalize">seller Email:</span> {sellerEmail}</p>
                <p className="text-gray-800"><span className="font-semibold text-black capitalize">detaill Description:</span>{detaill}</p>
             
                <p className="mb-3">price: {price}</p>
                <Link to={`/`} className="bg-red-500 rounded-md p-2 text-center">back to home</Link>
            </div>

        </div>
    );
};

export default Detaill;