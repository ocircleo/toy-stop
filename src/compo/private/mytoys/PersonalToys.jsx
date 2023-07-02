import { useContext, useEffect, useState } from "react";
import { context } from "../../shared/provider/Provider";
import PersonalSingletoy from "./PersonalSingletoy";
import useTitle from "../../shared/Title/useTitle";
import Loading from "../loading/Loading";

const PersonalToys = () => {
    useTitle('My Toys')
    const { currentUser } = useContext(context)
    let email = currentUser.email;
    const [loading, setLoading] = useState(true)
    const [usersData, setUsersData] = useState([])
    let [loadedToysData, setLoadedToysDta] = useState([])
    let [displayFilter, setDisplayFilter] = useState(false)
    useEffect(() => {
        fetch(`https://assignment-11-server-sigma-green.vercel.app/toys/user/${email}`).then(res => res.json()).then(data => {
            setUsersData(data)
            setLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const filter = (props) => {
        setLoading(true)
        if (props == 'assending') {
            fetch('https://assignment-11-server-sigma-green.vercel.app/toys/sort/1').then(res => res.json()).then(data => {
                setUsersData(data)
                setLoading(false)
            })
        }
        if (props == 'desending') {
            fetch('https://assignment-11-server-sigma-green.vercel.app/toys/sort/-1').then(res => res.json()).then(data => {
                setUsersData(data)
                setLoading(false)
            })
        }
        if (props == 'deafult') {
            fetch('https://assignment-11-server-sigma-green.vercel.app/toys/get').then(res => res.json()).then(data => {
                setUsersData(data)
                setLoading(false)
            })
        }
    }
    useEffect(() => {
        setLoadedToysDta(usersData)
    }, [usersData])
    return (
        <div className="container mx-auto grid gap-2">
            <div className="h-[80px] py-3 px-4 w-full flex relative justify-end">
                <button onClick={() => setDisplayFilter(!displayFilter)} className="bg-yellow-500 px-4 rounded capitalize font-semibold">filter by price</button>
                <div className={`flex p-2 rounded flex-col gap-3 absolute top-[70px] w-[200px] bg-red-300 ${displayFilter ? 'block' : 'hidden'} `}>
                    <button className="bg-red-400 hover:bg-red-500 duration-200 px-4 py-2 rounded capitalize font-semibold w-full" onClick={() => { filter('assending'); setDisplayFilter(!displayFilter) }}>low high</button>
                    <button className="bg-red-400 hover:bg-red-500 duration-200 px-4 py-2 rounded capitalize font-semibold w-full" onClick={() => { filter('desending'); setDisplayFilter(!displayFilter) }}>high to low</button>
                    <button className="bg-red-400 hover:bg-red-500 duration-200 py-2 px-4 rounded capitalize font-semibold w-full" onClick={() => { filter('deafult'); setDisplayFilter(!displayFilter) }}>deafult</button>
                </div>
            </div>
            {
                loading ? <Loading></Loading> : <>

                    {
                        loadedToysData.map(element => <PersonalSingletoy key={element._id} toyData={element}></PersonalSingletoy>)
                    }
                </>
            }

        </div>
    );
};

export default PersonalToys;