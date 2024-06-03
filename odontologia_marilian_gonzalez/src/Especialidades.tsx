import React from 'react'
import Article from './components/Article'
import TarjetaEspecialidad from './components/TarjetaEspecialidad'
import imgEspecialidad from './assets/imagenEspecialidad.png'
import Footer from './components/Footer'
import Header from './components/Header'

const Especialidad = () => {
  return (
    <div>
        <Header/>
        <Article title='Especialidades' textContent= 'Descubre Nuestras Áreas de Especialización'/>
        <div className='contenedorEspecialidades'>
          <TarjetaEspecialidad id="1" nombre="Odontología General" descripcion='Nuestros servicios incluyen limpieza dental profesional, rehabilitación oral, resinas estéticas, y tratamientos de caries'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad id="2" nombre="Ortodoncia y Ortopedia" descripcion='Nuestros servicios incluyen el diagnóstico y corrección de la posición de los dientes y la mandíbula en niños y adultos, garantizando una sonrisa alineada, funcional y saludable'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad id="3" nombre="Cirugía Bucal" descripcion='Nuestros servicios incluyen la extracción de piezas dentales, retiro de lesiones, corrección de fracturas, y cirugía ortognática, cuidando de tus dientes, mucosa y tejidos accesorios.'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad id="4" nombre="Estética" descripcion='Nuestros tratamientos mejoran la apariencia de tu sonrisa, desde blanqueamientos dentales hasta diseños de sonrisa con carillas de composite. Modificamos la forma, color y tamaño de los dientes para armonizarlos con tus encías y labios.'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad id="5" nombre="Rehabilitación e Implantología" descripcion='Ofrecemos un tratamiento quirúrgico diseñado para reemplazar dientes perdidos mediante implantes de titanio que sustituyen la raíz ausente, seguido del diseño de coronas dentales para adaptarse a la nueva raíz, restaurando la función y estética de tu sonrisa'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad id="6" nombre="Odontopediatría" descripcion='En nuestras consultas, nos enfocamos en atender a todos los niños con cuidado y dedicación. Creamos un ambiente amigable y acogedor para que cada visita sea una experiencia positiva, independientemente de las necesidades específicas de cada niño. Nuestro equipo está comprometido en hacer que todos los niños se sientan cómodos y seguros durante su atención dental. '
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad id="7" nombre="Endodoncia" descripcion='Nuestros tratamientos de endodoncia se enfocan en el cuidado de la pulpa dental y los conductos, asegurando la salud y el bienestar de tus dientes desde adentro hacia afuera. '
          imagenUrl={imgEspecialidad}
          />
        </div>
        <Footer/>
    </div>
  )
}

export default Especialidad