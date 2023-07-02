import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";
import useTitle from "../../shared/Title/useTitle";
import Spinner from "../../shared/spinner/Spinner";
import Aos from "aos";
import 'aos/dist/aos.css';

const Alltoys = () => {
    useEffect(() => {
        Aos.init({
            duration: 400
        })
    }, [])
    const [dataLoading, setDataLoading] = useState(true)
    const [toysData, setToysData] = useState([])
    let [loadedToysData, setLoadedToysDta] = useState([])
    let [displayFilter, setDisplayFilter] = useState(false)
    useEffect(() => {
        fetch('https://assignment-11-server-sigma-green.vercel.app/toys/get').then(res => res.json()).then(data => {
            setDataLoading(false)
            setToysData(data)
        })
    }, [])
    const loadMore = () => {
        fetch('https://assignment-11-server-sigma-green.vercel.app/toys').then(res => res.json()).then(data => {

            setToysData(data)
        })
    }
    const filter = (props) => {
        setDataLoading(true)
        if (props == 'assending') {
            fetch('https://assignment-11-server-sigma-green.vercel.app/toys/sort/1').then(res => res.json()).then(data => {
                setToysData(data)
                setDataLoading(false)
            })
        }
        if (props == 'desending') {
            fetch('https://assignment-11-server-sigma-green.vercel.app/toys/sort/-1').then(res => res.json()).then(data => {
                setToysData(data)
                setDataLoading(false)
            })
        }
        if (props == 'deafult') {
            fetch('https://assignment-11-server-sigma-green.vercel.app/toys/get').then(res => res.json()).then(data => {
                setDataLoading(false)
                setToysData(data)
            })
        }
    }
    useEffect(() => {
        setLoadedToysDta(toysData)
    }, [toysData])

    useTitle('All Toys')
    const searchToys = (e) => {
        setDataLoading(true)
        e.preventDefault()
        let keyStroke = document.getElementById('search').value

        if (keyStroke == '') {
            fetch('https://assignment-11-server-sigma-green.vercel.app/toys/get').then(res => res.json()).then(data => {
                setDataLoading(false)
                setToysData(data)
            })
        } else {
            fetch(`https://assignment-11-server-sigma-green.vercel.app/toys/search/${keyStroke}`).then(res => res.json()).then(data => {
                setToysData(data)
                setDataLoading(false)
            })
        }


        // toysData.forEach(element => {
        //     let toyName = element.toyName
        //     toyName = toyName.toLowerCase()
        //     keyStroke = keyStroke.toLowerCase()
        //     if (toyName.includes(keyStroke)) {
        //         searchedToysData.push(element)
        //     } else {
        //         // console.log('not matched')
        //     }
        // })
        // setLoadedToysDta(searchedToysData)
    }
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-center text-3xl font-semibold py-3">Start typing to search</h1>
                <form className="flex gap-1 my-3 justify-center  mx-auto" onSubmit={(e) => e.preventDefault()} onChange={searchToys}>
                    <label htmlFor="search"></label>
                    <input type="text" name="search" id="search" className="md:w-[600px] w-full" placeholder="Enter Toy name" />

                </form>
                {
                    dataLoading ? <Spinner></Spinner> : <>


                        <div className="h-[80px] py-3 px-4 w-full flex relative justify-end">
                            <button onClick={() => setDisplayFilter(!displayFilter)} className="bg-yellow-500 px-4 rounded capitalize font-semibold">filter by price</button>
                            <div className={`flex p-2 rounded flex-col gap-3 absolute z-10 top-[70px] w-[200px] bg-red-300 ${displayFilter ? 'block' : 'hidden'} `}>
                                <button className="bg-red-400 hover:bg-red-500 duration-200 px-4 py-2 rounded capitalize font-semibold w-full" onClick={() => { filter('assending'); setDisplayFilter(!displayFilter) }}>low high</button>
                                <button className="bg-red-400 hover:bg-red-500 duration-200 px-4 py-2 rounded capitalize font-semibold w-full" onClick={() => { filter('desending'); setDisplayFilter(!displayFilter) }}>high to low</button>
                                <button className="bg-red-400 hover:bg-red-500 duration-200 py-2 px-4 rounded capitalize font-semibold w-full" onClick={() => { filter('deafult'); setDisplayFilter(!displayFilter) }}>deafult</button>
                            </div>
                        </div>
                        <div className='grid gap-4 xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                            {
                                loadedToysData.map(element => <SingleToy key={element._id} toyData={element}></SingleToy>)
                            }
                        </div>
                        <div className="w-ful h-16 flex items-center justify-center ">
                            <button className="bg-yellow-500 p-3 rounded" onClick={loadMore}>Load More</button>
                        </div>
                    </>
                }
            </div>

        </>
    );
};

export default Alltoys;