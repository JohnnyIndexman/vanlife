import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function Header() {
  const styleNav = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true)

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsClose(!isClose)
  };


  const styles ={
    '@media(maxWidth: 760px)':{
      display: isOpen ? 'block' : 'none'
    }
  }



  return (
    <div>
      <header>
        <h1><Link to='/'>#VANLIFE</Link></h1>
        <nav>
          <NavLink
            style={({ isActive }) => isActive ? styleNav : null}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            style={({ isActive }) => isActive ? styleNav : null}
          >
            Contact
          </NavLink>
          <NavLink
            to='/vans'
            style={({ isActive }) => isActive ? styleNav : null}
          >
            Vans
          </NavLink>
          <NavLink
            to='/host'
            style={({ isActive }) => isActive ? styleNav : null}
          >
            Host
          </NavLink>
        </nav>
        {isClose && <RiMenu4Line
          onClick={toggleOpen}
          size='30px' className= 'icons'
        />}
        <IoMdClose
          onClick={toggleOpen}
          size='30px' className='icons'
          style={{ display: isOpen ? 'block' : 'none' }}
        />
      </header>
      {isOpen && <nav className='header2' 
      style={styles}
      >
        <NavLink
          style={({ isActive }) => isActive ? styleNav : null}
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          style={({ isActive }) => isActive ? styleNav : null}
        >
          Contact
        </NavLink>
        <NavLink
          to='/vans'
          style={({ isActive }) => isActive ? styleNav : null}
        >
          Vans
        </NavLink>
        <NavLink
          to='/host'
          style={({ isActive }) => isActive ? styleNav : null}
        >
          Host
        </NavLink>
      </nav>}
    </div>
  )
}

export default Header