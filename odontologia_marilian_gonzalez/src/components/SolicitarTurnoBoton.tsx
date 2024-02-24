import React from 'react'

const SolicitarTurnoBoton:React.FC = () => {
  const handleClick =()=>{
    window.open('https://wa.me/5491134263038?text=Hola!%20Quiero%20solicitar%20un%20turno.', '_blank')
  }

  return (
    <button onClick={handleClick}>
        Solicitar turno
    </button>
  )
}

export default SolicitarTurnoBoton