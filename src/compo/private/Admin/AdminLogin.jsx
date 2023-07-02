import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { context } from "../../shared/provider/Provider";
import useTitle from "../../shared/Title/useTitle";

const AdminLogin = () => {
    useTitle("Admin Login")
    const [passwordStatus, setPasswordStatus] = useState(false)
    const { setAdmin } = useContext(context)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const login = (e) => {
        e.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let adminData = { email, password }
        if (email == 'toy@admin.com' && password == "adminauthacces") {
            setAdmin(adminData)
            navigate(from, { replace: true })
        }

    }
    return (
        <div>
            <div className="w-full md:w-[600px] mx-auto" onSubmit={login}>
                <h2 className='text-center text-3xl capitalize'>Admin Login</h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email">enter your email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="password">enter your password</label>
                        <input type={`${!passwordStatus ? "password" : "text"}`} name="password" id="password" />
                    </div>
                    <p className="flex items-center gap-2"><input type="checkbox" onClick={() => setPasswordStatus(!passwordStatus)} className="h-[20px] w-[20px] cursor-pointer" /> show password</p>
                    <button className='bg-yellow-500 py-2 rounded-md font-bold capitalize'>Login</button>
                    
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;