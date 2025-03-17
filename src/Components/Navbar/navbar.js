import React, {useState} from 'react'
import './navbar.css'
import logo from '../../Images/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../Images/contactImg.png'
import burgerMenu from '../../Images/burgerMenu.png'

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);


  return (
    <nav className='navbar'>

      <img src={logo} alt="logo" className='logo'/>
      <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
            <a className="desktopMenuListItem" href="Resume_Link" target="_blank" rel="noopener noreferrer"> Resume </a>
      </div>

      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth', block: 'start'});
      }}>
        <img src={contactImg} alt="Contact" className="desktopMenuImg" /> Contact Me
      </button>

      <img src={burgerMenu} alt="burgerMenu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <a className="listItem" onClick={()=>setShowMenu(false)}href="Resume_Link" target="_blank" rel="noopener noreferrer">Resume</a>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
      </div>

      
    </nav>
  )
}

export default Navbar;

