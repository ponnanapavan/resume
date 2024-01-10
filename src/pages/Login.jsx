import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Css/Login.css'
const Login = () => {
  return (
    <div className='container'>
     <form className='login-data' >
       <div className="username">
        <input type="text" placeholder='username' />
       </div>
       <div className='password'>
        <input type="password" placeholder='password' />
       </div>
       <div className='lg-btn'>
        <button>LOGIN</button>
       <h4>If you are a new user pls create account<Link to='/register'>Register</Link></h4>
       </div>
     </form>
   
     </div>
     
    

  )
}

export default Login
