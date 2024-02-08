import React from 'react'
import barraMenu from "../assets/barra-de-menus.png"

const Menu = () => {
  return (
    <div className='cajaMenu'>
    <img src={barraMenu} alt="hamburgesa" className='barraMenu'>
    </img>
    </div>
  )
}

export default Menu