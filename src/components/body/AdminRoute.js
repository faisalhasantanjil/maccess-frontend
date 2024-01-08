import React, { useContext } from 'react'
import { AuthContext } from '../../config/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
    const {user, loading} = useContext(AuthContext)

    const admin = user?.email === "faisal@admin.com" ? false : true ;

    console.log(admin);
    return (
        loading ? <p>Wait a second....</p> : admin ? <Outlet/>: <Navigate to='/signin'/>
    )
}

export default AdminRoute

