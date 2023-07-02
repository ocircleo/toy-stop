/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const PersonalSingletoy = ({ toyData }) => {

    // eslint-disable-next-line no-unused-vars
    let { _id, email, picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detaill, catagory } = toyData
    const deleteSingleData = () => {
        Swal.fire({
            icon: 'error',
            title: 'Delte ?',
            text: 'Are you sure you want to delet this item ?',
            // footer: '<a href="">Why do I have this issue?</a>'
        }).then(res => {
            if (res.isConfirmed) {
                fetch(`https://assignment-11-server-sigma-green.vercel.app/toys/${_id}`, {
                    method: 'DELETE',
                    headers: { 'content-type': 'application/json' }
                }).then(res => res.json()).then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'succes',
                            'Your item has been deleted',
                            'success'
                        ).then(res => {
                            if (res.isConfirmed) {
                                window.location.reload()
                            }
                        })
                    }
                })
            }

        })

    }
    return (
        <div>
           
            <div className="grid grid-cols-1 md:grid-cols-5 md:min-h-[300px] items-center  border-2 p-1 gap-3 md:gap-0 h-full">
                <div className="grid justify-center h-full bg-gray-100 md:col-span-2  col-span-1">
                    <img src={picture} alt="" className="h-[300px] w-auto object-cover bg-gray-200 rounded-sm" />
                </div>

                <div className="capitalize  flex flex-col justify-center md:col-span-2  col-span-1 items-start px-3">
                    <p className="font-semibold">name: {toyName}</p>
                    <p>catagory: {catagory}</p>
                    <p>rating: {rating}</p>
                    <p className="mb-3">price: {price} $</p>
                    <Link to={`/detaill/${_id}`} className="bg-red-500 rounded-md p-2 text-center ">show detaill</Link>
                </div>
                <div className="capitalize gap-3 flex flex-col justify-center md:col-span-1  col-span-1 items-center px-3">

                    <Link to={`/update/${_id}`} className="bg-yellow-500 rounded-md p-2 text-center w-full">Edit</Link>
                    <button onClick={deleteSingleData} className="bg-black text-white capitalize font-bold rounded-md p-2 text-center w-full">delete</button>
                </div>


            </div>
        </div>
    );
};

export default PersonalSingletoy;