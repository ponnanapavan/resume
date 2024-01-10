import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">ResumeIo</div>
        {/* <div className="center">
            
        </div> */}
        <div className="right">
        <button className='login'><Link to='/login'>LOGIN</Link></button>
        <button className='logout'>LOGOUT</button>
        </div>
      
     
    </div>
  )
}

export default Navbar
