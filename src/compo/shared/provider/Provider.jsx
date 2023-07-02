import { createContext, useEffect, useState } from "react";
import app from "../../../assets/Firebase_sdk";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const context = createContext(null)
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [admin, setAdmin] = useState(null)
    const [currentUser, setUser] = useState(null)
    const [toysData, setToysData] = useState([])
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    useEffect(() => {
        fetch('https://assignment-11-server-sigma-green.vercel.app/toys').then(res => res.json()).then(data => setToysData(data))
    }, [])
    const provider = new GoogleAuthProvider()
    const signInGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const createEmailUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmailUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        let unSubsscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unSubsscribe()
    }, [])

    const contextData = {
        toysData, createEmailUser, signInEmailUser, signInGoogle, currentUser, loading, setUser, logout, admin, setAdmin

    }
    return (
        <context.Provider value={contextData}>
            {children}
        </context.Provider>
    );
};

export default Provider;