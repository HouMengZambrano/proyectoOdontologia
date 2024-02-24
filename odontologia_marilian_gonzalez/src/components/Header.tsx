import React from 'react'
import Menu from './Menu'
import logoImage from "../assets/Logo_MGOdont_color.jpg"
import {Link} from 'react-router-dom'
import "../sytles/Header.css"

const Header = () => {
  return (
    <div className='header'>
        <Link to= "/">
        <img src ={logoImage} alt= "logoImg" className='imgLogo' ></img>
        </Link>
        <Menu/>
    </div>
  )
}

export default Header