import React, { createContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

export const AuthContext = createContext({
    user: null,
    loading: true,
})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const auth = getAuth()
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        });
        return ()=>unsubscribe();
    },[])

  return (
    <AuthContext.Provider value={{user,loading}}>
        {children}
    </AuthContext.Provider>
  )
}
