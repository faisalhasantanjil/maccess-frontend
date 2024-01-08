import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../config/firebase-config'
import { AuthContext } from '../../config/AuthProvider'

const SignupComponent = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const {user} =useContext(AuthContext);
    const [err, setErr] = useState()
    const navigate = useNavigate();
   
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(password===password1){
        try{
          createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential)=>{
          console.log(userCredential)
          setErr('')
          setTimeout(function() {
            navigate('/');
          }, 1000);
         }).catch((error)=>{
            console.log(error);
         })
        }catch(error){
          console.log(error);
        }
      }
      else{
        setErr("Password should match")
      }
      
    }

    const renderform= (
      <div className="form mt-5 text-white" >
        <form onSubmit={handleSubmit}>
          <h2>Register Your Account</h2>
          {err? <p>{err}</p>:null}
          <div className="form-group input-container mt-3 form-group">
            <input type="email" name="email" value={email}
            onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Your Email' size="35"
            required />
          </div>

          <div className="form-group input-container mt-3 form-group">
            <input type="password" name="pass" value={password}
            onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' size="35" required />
          </div>
          <div className=" form-group input-container mt-3 form-group">
            <input type="password" name="pass" value={password1}
            onChange={(e)=>setPassword1(e.target.value)} placeholder='Re-type Password' size="35"
            required />
          </div>
          <div className=" form-group button-container mt-1 ">
            <input type="submit" />
          </div>

        </form>
    </div>
    )
  return (
    <div>
      <div className="row m-sm-0 p-sm-0 m-md-5 p-md-5" style={{backgroundColor:'#434a47',boxShadow:'20px 20px 50px 10px grey' ,borderRadius:"20% 10%"}}>
        <div className="col-sm-12 col-md-6">
          <img src="https://images.unsplash.com/photo-1642984120374-da83fef6bb20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2glMjB3YWxsZXR8ZW58MHwxfDB8fHww" className="img-fluid" alt="" srcset=""/>
        </div>
        <div className="col-sm-12 col-md-6 " style={{color:'white'}}>
          {user? <p>You already logged in using email: {user?.email}</p>:
           renderform}
           <section className='mt-3'>
            <p className='h6'> Already Registerred? <Link to='/signin'>Click here to Login</Link> </p>
           </section>
        </div>
      </div>
    </div>
  )
}

export default SignupComponent