// import React,{useState} from 'react'
import { useState } from "react"
import "../sytles/Menu.css"
import MenuDisplayed from './MenuDisplayed'
import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"

const Menu = () => {
  const [displayedMenu, SetDisplayedMenu] = useState<boolean>(false)

  const handleClick =()=>{
    SetDisplayedMenu(!displayedMenu)
  }

  return (
    <div className='cajaMenu'>
    <div className="barraMenuContainer" onClick={handleClick}>
      {
        displayedMenu?(
          <IoClose className="hamburgerMenu"/>
        ):
        (
          <IoMdMenu className="hamburgerMenu"/>
        )
      }
    </div>
    <MenuDisplayed isVisible={displayedMenu}/>
    </div>
  )
}

export default Menu