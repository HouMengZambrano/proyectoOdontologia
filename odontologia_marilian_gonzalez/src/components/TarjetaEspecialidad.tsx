import React from 'react'
import "../sytles/TarjetaEspecialidad.css"

type TarjetaEspeciadadProp = {
    id: string;
    nombre: string;
    descripcion: string;
    imagenUrl: string;
}

const TarjetaEspecialidad: React.FC<TarjetaEspeciadadProp> = ({id,nombre, descripcion, imagenUrl}) => {
  return (
    <div id={id} className='especialidad_tarjeta_container'>
        <h1>{nombre}
        </h1>
        <p>
            {descripcion}
        </p>
        <div className='especialidad_img_container'>
        <img src={imagenUrl} alt= {`${nombre} img`}></img>
        </div>
    </div>
  )
}

export default TarjetaEspecialidad