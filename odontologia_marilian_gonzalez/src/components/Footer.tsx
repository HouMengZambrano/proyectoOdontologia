// import React from 'react'
import "../sytles/Footer.css"
import facebookLogo from "../assets/facebook.png"
import tiktokLogo from "../assets/tik-tok.png"
import instagramLogo from "../assets/instagram.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <span>Sigueme en las redes</span>
            <span className='socialIcons'>
            <a href="https://www.instagram.com/odmariliangonzalez/" target="_blank" rel="noopener noreferrer">
             <img src={instagramLogo} alt='instagram logo'></img>
            </a>
            <a target="_self" >
              <img src={facebookLogo} alt='facebook logo'>
              </img>
            </a>
            <a target="_self">
              <img src={tiktokLogo}alt="tiktok logo"></img>
            </a>
            </span>
        </div>
        <div className='rights'>
            <span>© 2024 by Marilyan Gonzalez-Todos los derechos Reservados</span>
        </div>
    </div>
  )
}

export default Footer