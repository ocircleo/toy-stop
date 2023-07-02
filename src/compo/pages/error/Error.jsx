import { Link, useRouteError } from "react-router-dom";
import errImg from '../../../assets/errr.jpg'

const Error = () => {
    const error = useRouteError()
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'30px'}}>
            <img src={errImg} alt="" style={{ height: '300px', width: '400px', backgroundColor: 'gray',objectFit:'cover' }} />
            <h1 className="text-red-500">Error : {error.statusText || error.message}</h1>
            <Link className="bg-blue-400 rounded p-2" to={'/'}> Go back to home</Link>
        </div>
    );
};

export default Error;