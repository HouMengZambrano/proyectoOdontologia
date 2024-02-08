import React from 'react'
import "../sytles/Menu.css"

const MenuDisplayed: React.FC<{isVisible: boolean}>= ({isVisible}) => {
  return (
    <div className={`menuDisplayed${isVisible ? "Visible" : ""}`}>
        <span>Sobre mi</span>
        <span>Especialidades</span>
        <span>Contacto</span>
    </div>
  )
}

export default MenuDisplayed