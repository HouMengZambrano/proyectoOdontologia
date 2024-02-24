import React from 'react'
import GoogleMap from './components/GoogleMap'
import Footer from './components/Footer'
import Article from './components/Article'
import Header from './components/Header'


const Contacto = () => {
  return (
    <div>
        <Header/>
        <div className='contacto_article_1'>
            <Article title="Turno y Contacto" textContent="Para solicitar un turno o realizar una consulta, mandar un mensaje a nuestro numero de whastApp"></Article>
            <div>
                <h3>
                    Horarios de atención
                </h3>
                <p>
                     Lunes a Sabado de 9 am a 8pm
                </p>
            </div>
            <div>
                <h3>
                    WhatsApp
                </h3>
                <p>
                     +549111234567
                </p>
            </div>
            <div>
                <h3>
                    Dirección del Consultorio
                </h3>
                <p>
                    Monroe 2341, oficina 3
                </p>
            </div>
            <GoogleMap/>
            <Footer/>    
        </div>
    </div>
  )
}

export default Contacto