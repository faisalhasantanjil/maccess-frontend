import React, { useContext } from 'react'
import { AuthContext } from '../../config/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {user, loading} = useContext(AuthContext)
  return (
    loading ? <p>Wait a second....</p> : user ? <Outlet/>: <Navigate to='/signin'/>
  )
}

export default ProtectedRoutes