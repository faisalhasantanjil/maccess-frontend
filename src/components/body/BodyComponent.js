import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupComponent from './SignupComponent'
import SigninComponent from './SigninComponent'
import ProtectedRoutes from './ProtectedRoutes'
import ProductDetails from './ProductDetails'
import AddProductComponent from './AddProductComponent'
import WatchComponet from './WatchComponet'
import WalletComponent from './WalletComponent'
import SunglassComponent from './SunglassComponent'
import WatchDetails from './WatchDetails'
import WalletDetails from './WalletDetails'
import SunglassDetails from './SunglassDetails'
import CartComponent from './CartComponent'
import HomeComponent from './HomeComponent'
import AdminRoute from './AdminRoute'

const BodyComponent = () => {
  return (
   <div style={{minHeight:'100vh'}}>
     <Routes>
        <Route path='/' exact element={<HomeComponent/>} />
        <Route path='/signin' exact element={ <SigninComponent/>} />
        <Route path='/signup' exact element={<SignupComponent/>} />
  
        <Route element={<AdminRoute/>}>  
          <Route path='/upload' exact element={<AddProductComponent/>} replace/>  
        </Route>

        <Route path='/details' exact element={<ProductDetails/>} replace/>
        <Route path='/watch' exact element={<WatchComponet/>} replace/>
        <Route path='/watch/:id' exact element={<WatchDetails/>} replace/>
        <Route path='/wallet' exact element={<WalletComponent/>} replace/>
        <Route path='/wallet/:id' exact element={<WalletDetails/>} replace/>
        <Route path='/sunglass' exact element={<SunglassComponent/>} replace/>
        <Route path='/sunglass/:id' exact element={<SunglassDetails/>} replace/>
        <Route path='/cart' exact element={<CartComponent/>} replace/>

    </Routes>
   </div>
  )
}

export default BodyComponent