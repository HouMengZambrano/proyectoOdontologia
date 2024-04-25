import React from 'react'
import "../sytles/Menu.css"
import{Link} from "react-router-dom"

const MenuDisplayed: React.FC<{isVisible: boolean}>= ({isVisible}) => {
  return (
    <div className={`menuDisplayed${isVisible ? "Visible" : ""}`}>
        <Link to="/sobremi" className="menuLink">Sobre mi</Link>
        <Link to="/especialidad" className="menuLink">Especialidades</Link>
        <Link to="/contacto" className="menuLink">Contacto</Link>
    </div>
  )
}

export default MenuDisplayed