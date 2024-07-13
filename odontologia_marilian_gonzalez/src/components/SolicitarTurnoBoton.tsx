import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import '../sytles/SolicitarTurnoButton.css'

const SolicitarTurnoBoton:React.FC = () => {
  const handleClick =()=>{
    window.open('https://wa.me/5491134263038?text=Hola!%20Quiero%20solicitar%20un%20turno.', '_blank')
  }
  return (
    <button onClick={handleClick} className="solicitarTurnoBtn" >
        <FaWhatsapp className='whatsappIcon'/>
        <span>Solicitar Turno</span>
    </button>
  )
}

export default SolicitarTurnoBoton