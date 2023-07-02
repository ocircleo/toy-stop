import { Link } from "react-router-dom";
import toy from "../../../assets/toy.jpg"
import { useContext, useState } from "react";
import { BsTextRight, BsTextLeft } from "react-icons/bs";
import { context } from "../provider/Provider";
import Activelink from "./Activelink";
const Navigation = () => {
    const [stateofNav, setNavState] = useState(false)
    const { currentUser, logout, setUser } = useContext(context)
    const navToggle = () => {
        setNavState(!stateofNav)
    }

    const signout = () => {
        // eslint-disable-next-line no-unused-vars
        logout().then(data => {
            setUser(null)
        })
    }
    // https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-ocircleo
    return (
        <>
            <nav id="nav" className="flex h-[70px] border-b-2 px-3 md:px-16 items-center justify-between fixed top-0 z-20 bg-white w-full">
                <div>
                    <Link to={'/'} className="flex items-center gap-2">
                        <img src={toy} alt="" className="h-[60px]" />
                        <h1 className="text-2xl font-bold text-red-500"  >Toy stop</h1>
                    </Link>
                </div>
                <button className="lg:hidden block border-black border-2 rounded-md p-1 text-3xl" onClick={navToggle}>
                    {
                        !stateofNav ? <BsTextRight></BsTextRight> : <BsTextLeft></BsTextLeft>
                    }
                </button>
                <ul className={`flex duration-500 gap-3 lg:static lg:flex-row lg:w-auto lg:h-auto lg:self-center lg:bg-white flex-col w-full fixed z-10 h-[100vh] items-center justify-center self-start bg-yellow-50 ${stateofNav ? 'left-0' : 'left-full'} top-[70px] `}>
                    <li onClick={navToggle}><Activelink goto={'/'}>Home</Activelink></li>
                    <li onClick={navToggle}><Activelink goto={'/alltoys'} >All toys</Activelink></li>
                    <li onClick={navToggle}><Activelink goto={'/blog'} >Blog</Activelink></li>

                    {
                        currentUser ? <>
                            <li onClick={navToggle}><Activelink goto={'/addtoy'} >Add-toy</Activelink></li>
                            <li onClick={navToggle}><Activelink goto={'/mytoys'}>My-toys</Activelink></li>
                            <li>
                                <div className="flex items-center gap-2 cursor-pointer" id="user-div">
                                    <p id="user-name" className="hidden">{currentUser.displayName}</p>
                                    <img className="h-[50px] w-[50px] rounded-full" src={currentUser.photoURL} alt="" />
                                </div>
                            </li>
                            <li onClick={navToggle} className="mt-3 md:mt-0"><button className="rounded bg-red-500 p-2 text-white" onClick={signout}>sign out</button></li>

                        </> : <>
                            <li onClick={navToggle} className="mt-3 md:mt-0"><Link to={'/login'} className="rounded bg-red-500 p-2">Log in</Link></li>
                            <li onClick={navToggle} className="mt-3 md:mt-0"><Link to={'/register'} className="rounded bg-yellow-500 p-2">Register</Link></li>
                        </>
                    }
                </ul>
            </nav>
            <div className="nav-backup h-[70px]"></div>
        </>
    );
};

export default Navigation;