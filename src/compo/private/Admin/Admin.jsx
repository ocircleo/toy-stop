
import { useEffect, useState } from "react";
import SingleToyAdmin from "./SingleToyAdmin";
import useTitle from "../../shared/Title/useTitle";
const Admin = () => {
    useTitle('Admin')
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-server-sigma-green.vercel.app/toys/`).then(res => res.json()).then(data => setUsersData(data))
    }, [])

    return (
        <div className="container mx-auto grid gap-2">
            {
                usersData.map(element => <SingleToyAdmin key={element._id} toyData={element}></SingleToyAdmin>)
            }
        </div>
    );
};

export default Admin;