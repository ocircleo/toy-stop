import { useContext, useState } from "react";
import { context } from "../../shared/provider/Provider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../shared/Title/useTitle";

const Login = () => {
    const [passwordStatus, setPasswordStatus] = useState(false)
    let { signInEmailUser, signInGoogle, setUser } = useContext(context)
    useTitle('Login')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    let email, password;
    const login = (e) => {
        e.preventDefault()
        email = document.getElementById('email').value
        password = document.getElementById('password').value
        signInEmailUser(email, password).then(data => {
            setUser(data.user)
            navigate(from, { replace: true })
        }).catch(err => console.log(err))

    }
    const googleLogin = () => {
        signInGoogle().then(result => {
            const user = result.user
            setUser(user)
            navigate(from, { replace: true })
        }).catch(err => {
            console.log(err.code)
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className="w-full md:w-[600px] mx-auto" onSubmit={login}>
                <h2 className='text-center text-3xl capitalize'>please Login</h2>
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
                    <button className='bg-yellow-500 py-2 rounded-md font-bold capitalize' type="submit">Login</button>
                    <p>Dont have a acount ? Then please <Link to={'/register'} className='text-blue-600 underline'>Register</Link></p>
                </form>
                <p className='text-center'> or</p>
                <div className="flex w-full justify-center">

                    <button className='bg-red-500 py-2 rounded-md w-full font-bold capitalize' onClick={googleLogin}>login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;