import React, { useContext, useMemo, useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import '../../css/navComponent.css'
import { AuthContext } from '../../config/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';


const NavComponent = () => {
  const {user} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      console.log("Signout Successfully");
      setTimeout(()=>{
        navigate('/signin');
      },1000)
      
    }).catch((error)=>{
      console.log(error);

    })
  }

  const logoutLink = useMemo(() => (
    <Button onClick={handleSignOut}>Logout</Button>
  ), [user]);

  // UseMemo for memoized login link
  const loginLink = useMemo(() => (
    <Button><Link to='/signin' style={{textDecoration: 'None', color:'black'}}>Login</Link> </Button>
  ), []);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='' style={{marginBottom:'60px', opacity:""}}>
       <Navbar color="light" light expand="lg" fixed="top" style={{opacity:'1'}}>
          <NavbarBrand href="/">Brand</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" >
              <NavItem>
                <NavLink className='hnav' href="/" style={{textDecoration: 'None', color:'black'}}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='hnav' href="/watch" style={{textDecoration: 'None', color:'black'}}>Watch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='hnav' href="/wallet" style={{textDecoration: 'None', color:'black'}}>Wallet</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='hnav' href="/sunglass" style={{textDecoration: 'None', color:'black'}}>Sunglass</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='hnav' href="#foot" style={{textDecoration: 'None', color:'black'}}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='hnav' href="/contact" style={{textDecoration: 'None', color:'black'}}>Contact</NavLink>
              </NavItem>
              
            </Nav>
            <Nav className="ms-auto me-5" > {/* Create a separate Nav for right-aligned items */}
            <NavItem >
            <NavLink className='hnav' href="/cart" style={{textDecoration: 'None', color:'black', float: 'right'}}>View Cart</NavLink>
              </NavItem>
              <NavItem >
                {user ?logoutLink:loginLink}
              </NavItem>
            </Nav>
            
          </Collapse>
      </Navbar>
    </div>
  )
}

export default NavComponent