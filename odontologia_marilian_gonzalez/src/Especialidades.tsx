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
        <Article title='Especialidades' textContent= 'Mensaje que haga saber todo lo que have va en pro de mejorar la salud bucal'/>
        <div className='contenedorEspecialidades'>
          <TarjetaEspecialidad  nombre="Odontologia General" descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eum temporibus iusto doloribus quisquam molestiae harum veniam distinctio necessitatibus consequatur? .'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad  nombre="Cirugia Bucal" descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eum temporibus iusto doloribus quisquam molestiae harum veniam distinctio necessitatibus consequatur? .'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad  nombre="Ortodoncia" descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eum temporibus iusto doloribus quisquam molestiae harum veniam distinctio necessitatibus consequatur? .'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad  nombre="Estetica y Rehabilitacion" descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eum temporibus iusto doloribus quisquam molestiae harum veniam distinctio necessitatibus consequatur? .'
          imagenUrl={imgEspecialidad}
          />
          <TarjetaEspecialidad  nombre="Implantologia" descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eum temporibus iusto doloribus quisquam molestiae harum veniam distinctio necessitatibus consequatur? .'
          imagenUrl={imgEspecialidad}
          />
        </div>
        <Footer/>
    </div>
  )
}

export default Especialidad