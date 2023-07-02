import { Link } from "react-router-dom";
import toyStop from '../../../assets/toy.jpg'
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="in-h-[300px] w-full bg-gray-700 mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-[60%] mx-auto">
                <div className="flex flex-col items-start gap-2 justify-center col-span-2">

                    <div className="flex gap-3 items-center">
                        <img src={toyStop} alt="" className="h-14 rounded-full" />
                        <span className="text-3xl text-red-500 font-bold capitalize">toy stop</span>
                    </div>
                    <p className="text-white capitalize">Important links</p>
                    <p className="text-gray-300 font-bold"><span className="text-white">location : </span> Dhaka, Bangladesh</p>
                    <p className="flex gap-2 text-3xl items-center"><BsFacebook className="text-blue-500"></BsFacebook> <AiFillGoogleCircle className="text-red-500 text-4xl"></AiFillGoogleCircle><BsGithub className="text-wh"></BsGithub></p>

                    <div className="flex gap-5 flex-row">
                        <Link to={'/admin'}>Admin panel</Link>
                    </div>
                    <p className=" text-gray-300">All the imges are added from google search.
                    The images Copyright belongs to the owners.This is just a demo site.
                    
                    </p>
                    <p className="text-lg text-white">Copyright @ToyStop 2023</p>

                </div>
                <div className="col-span-3">
                    <div className="w-full lg:w-96 p-6">
                        <h2 className='text-center text-3xl capitalize p-3'>send us an mail</h2>
                        <form className="flex flex-col gap-2">
                            <input type="text" name="name" id="name" placeholder="Enter your name" />
                            <input type="email" name="email" id="email" placeholder="Enter your emaill" />
                            <textarea name="textarea" placeholder="Enter your message" className="rounded min-h-[150px] border-2 border-red-500"></textarea>
                            <button className='bg-yellow-500 py-2 rounded-md font-bold capitalize'>send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;