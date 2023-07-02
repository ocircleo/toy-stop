import { NavLink } from 'react-router-dom';
import './active.css'
// eslint-disable-next-line react/prop-types
const Activelink = ({ goto, children }) => {

    return (
            <NavLink to={goto} className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : 'disabled'} >{children}</NavLink>

    );
};

export default Activelink;