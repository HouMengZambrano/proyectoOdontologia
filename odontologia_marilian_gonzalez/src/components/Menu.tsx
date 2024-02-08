import React,{useState} from 'react'
import barraMenu1 from "../assets/barra-de-menus.png"
import barraMenu2 from "../assets/x.png"
import "../sytles/Menu.css"
import MenuDisplayed from './MenuDisplayed'

const Menu = () => {
  const [menuSrc, SetMenuSrc] =  useState<string>(barraMenu1);
  const [displayedMenu, SetDisplayedMenu] = useState<boolean>(false)

  const handleClick =()=>{
    SetMenuSrc(menuSrc === barraMenu1 ? barraMenu2 : barraMenu1)
    SetDisplayedMenu(!displayedMenu)
  }

  return (
    <div className='cajaMenu'>
    <div className="barraMenuContainer" onClick={handleClick}>
    <img src={menuSrc} alt="hamburgesa" className="barraMenu">
    </img>
    </div>
    <MenuDisplayed isVisible={displayedMenu}/>
    </div>
  )
}

export default Menu