import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Navbar = function(){
    return(
        // use Outlet to route it recent react changes
    <>
       <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment' href= {"https://www.qcc.cuny.edu"}> QCC </a>
            <div className='ui right floated header'>
                <button className='ui button'> <Link to='/'>Home</Link></button>
                <button className='ui button'> <Link to='/about'>About Us</Link></button>
                <button className='ui button'> <Link to='/contact'>Contact</Link></button>
                <button className='ui button'> <Link to='/form'> Form</Link></button>
            </div>
       </nav>
       <Outlet/>
    </>
    )
}
export default Navbar