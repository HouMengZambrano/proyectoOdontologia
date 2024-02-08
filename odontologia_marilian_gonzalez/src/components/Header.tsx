import React from 'react'
import Menu from './Menu'
import logoImage from "../assets/Logo_MGOdont_color.jpg"
import "../sytles/Header.css"

const Header = () => {
  return (
    <div className='header'>
        <img src ={logoImage} alt= "logoImg" className='imgLogo' ></img>
        <Menu/>
    </div>
  )
}

export default Header