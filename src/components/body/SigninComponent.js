import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../config/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase-config';

const SigninComponent = () => {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, loading} =useContext(AuthContext);
  const [err, setErr] = useState()
  const navigate = useNavigate();
  console.log("GetIDToken: ",user?.getIdToken());
    
  console.log("================user================");
  console.log(user);
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    try{
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential)
      setErr("");
      setEmail("");
      setPassword("");
      setTimeout(function() {
        navigate('/');
      }, 1000);
    }).catch((error)=>{
        console.log(error);
    })
    }catch(error){
      setErr("Invalid Credential!!!")
      console.log(error);
    }
   
  }
  
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      console.log("Signout Successfully");
      setErr('Logout successfully')
    }).catch((error)=>{
      console.log(error);

    })
  }

  const renderform= (
    <div className="form-group form mt-5 text-white " style={{fontSize:'large'}}>
      <form onSubmit={handleSubmit}>
        <h2 className='display-6'>Welcome Back!</h2>
        {err? <p>{err}</p>:null}
        <div className="form-group input-container mt-3">
          
          <input size={30} id="productName"type="email" name="email" value={email}
          onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Your Email'
          required />
        </div>

        <div className= " form-group input-container mt-3">
          
          <input size={28} type="password" name="pass" value={password}
          onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'
          required />
        </div>
        
        <div className=" form-group button-container">
          <input className="btn btn-light m-3" type="submit" />
        </div>

      </form>
      <p className='mb-0'>Don't have any Account?..</p>
      <a href='/signup' className='text-decoration-none'><span>Click to register</span></a>
  </div>
  )
  const signinStatus=(
    <div>
      <p>You already loggedIn</p>
      <button className='mx-auto m-2' onClick={handleSignOut}>Logout</button>
    </div>
  )
return (
  <div>
    <div className="row m-sm-0 p-sm-0 m-md-5 p-md-5" style={{backgroundColor:'#a7b5a7',boxShadow:'20px 20px 50px 10px grey' ,borderRadius:"20% 10%"}}>
        <div className="col-sm-12 col-md-6">
          <img className='w-75 mx-auto' src="https://images.unsplash.com/photo-1572782992110-afab5a6ef870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3JldHxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
        </div>
      
      
      <div className="col-sm-12 col-md-6 d-flex justify-content-center">
      <p>{user?.email}</p>
        {loading?<p>Wait a minute</p>:
        user?.email? signinStatus: renderform}
        
      </div>
      
    </div>
  </div>
)
}

export default SigninComponent