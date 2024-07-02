// import React from 'react'
import GoogleMap from './components/GoogleMap'
import Footer from './components/Footer'
import Article from './components/Article'
import Header from './components/Header'
import "./Contacto.css"


const Contacto = () => {
  return (
    <div>
        <Header/>
        <div className='contacto_article_1'>
            <Article title="Turno y Contacto" textContent="Para solicitar un turno o realizar una consulta, mándanos un mensaje a nuestro número de WhatsApp y la doctora te responderá personalmente."></Article>
            <div className='contacto_informacion_1'>
                <h3>
                    Horarios de atención
                </h3>
                <p>
                Lunes a Viernes: de 10 a 19hs
                </p>
                <p>
                Sabado: de 10 a 16hs
                </p>
                
            </div>
            <div className='contacto_informacion_2'>
                <h3>
                    WhatsApp
                </h3>
                <p>
                     +54 911 34263038
                </p>
            </div>
            <div className='contacto_informacion_3'>
                <h3>
                    Dirección
                </h3>
                <p>
                    Monroe 2341, oficina 3, Belgrano, CABA.
                </p>
            </div>
            <GoogleMap/>
            <Footer/>    
        </div>
    </div>
  )
}

export default Contacto