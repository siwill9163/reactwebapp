import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container">

        <div className="nav-container">

            <div className="nav-left">
                <a className='logo' href="#">Simon Williams WeB</a>
                <a href="#">My Work</a>
                <a href="#">Testimonals</a>
                <a href="#">Pricing</a>
            </div>

            <div className="nav-right">
                <a href="#">Sign in</a>
                <a href="#">Get started today</a>
            </div>

        </div>

    </div>
  )
}

export default Navbar