import { useContext } from "react";
import { context } from "../../shared/provider/Provider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const AdminPrivate = ({ children }) => {
    const location = useLocation()
    const { admin } = useContext(context)
    if (admin) {
        return children
    }
    return <Navigate to={'/adminlogin'} state={{ from: location }}></Navigate>

};

export default AdminPrivate;