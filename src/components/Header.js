import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='header box'>
      <div className='logo box'>
        <span className='img_logo'>Eternivault</span>
      </div>
      <nav className='navBar'>
        <ul className='navList box'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/service'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
