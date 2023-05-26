import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null)
    const auth = getAuth(app)
    

   
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
          
            const loggedUser = {
                email: currentUser?.email
            }
            
            if(currentUser && currentUser?.email){

            fetch("https://car-doc-server-chi.vercel.app/jwt", {
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                setToken(data)
                localStorage.setItem("car-doc-token", data.token)
            })
        }
        
        else{
            localStorage.removeItem('car-doc-token')
        }
        
        setLoading(false)

        })

        return ()=>{unsubscribe()}
    },[])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }


    const authInfo ={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        auth,
        logOut,
        token
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider