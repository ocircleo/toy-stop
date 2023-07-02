
import { useContext, useState } from 'react';
import './register.css'
import { context } from '../../shared/provider/Provider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../shared/Title/useTitle';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    useTitle('Register')
    const [passwordStatus, setPasswordStatus] = useState(false)
    let { createEmailUser, signInGoogle, setUser } = useContext(context)
    const navigate = useNavigate()
    let name, email, password, imgUrl;
    const register = (e) => {
        e.preventDefault()
        name = document.getElementById('name').value
        email = document.getElementById('email').value
        password = document.getElementById('password').value
        imgUrl = document.getElementById('imgurl').value
        createEmailUser(email, password).then(data => {
            updateProfile(data.user, {
                displayName: name, photoURL: imgUrl
            }).then(() => {
                setUser(data.user)
                navigate('/')

            })
        })
    }
    const googleLogin = () => {
        signInGoogle().then(result => {
            const user = result.user
            setUser(user)
            navigate('/')
        }).catch(err => {
            console.log(err)

        })
    }

    return (
        <div className="w-full md:w-[600px] mx-auto" onSubmit={register}>
            <h2 className='text-center text-3xl capitalize'>please Register</h2>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <label htmlFor="name">enter your name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="email">enter your email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="password">enter your password</label>
                    <input type={`${!passwordStatus ? "password" : "text"}`} name="password" id="password" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="imgurl">enter your image url for profile (optional)</label>
                    <input type="text" name="imgurl" id="imgurl" />
                </div>
                <p className="flex items-center gap-2"><input type="checkbox" onClick={() => setPasswordStatus(!passwordStatus)} className="h-[20px] w-[20px] cursor-pointer" /> show password</p>
                <button className='bg-yellow-500 py-2 rounded-md font-bold capitalize'>register</button>
                <p>Allready have a acount ? Then please <Link to={'/login'} className='text-blue-600 underline'>Login</Link></p>

            </form>
            <p className='text-center'> or</p>
            <div className="flex w-full justify-center">
                <button className='bg-red-500 py-2 rounded-md w-full font-bold capitalize' onClick={googleLogin}>Register with google</button>
            </div>
        </div>
    );
};

export default Register;