import React from 'react'
import '../sytles/SloganArticle.css'
import SolicitarTurnoBoton from './SolicitarTurnoBoton'


const SloganArticle = () => {
  return (
    <div className='sloganArticle'>
    <div className='slogan'>
        <h2>
        !Diseñemos la sonrisa que mereces!
        </h2>
        <SolicitarTurnoBoton/>
    </div>   
</div>
  )
}

export default SloganArticle