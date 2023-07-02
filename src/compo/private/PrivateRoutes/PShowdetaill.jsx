import { useContext } from "react";
import { context } from "../../shared/provider/Provider";
import Loading from "../loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PShowdetaill = ({children}) => {
    const { currentUser, loading } = useContext(context)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (currentUser) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }}></Navigate>
};

export default PShowdetaill;