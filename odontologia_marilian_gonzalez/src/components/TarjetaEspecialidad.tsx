import React from 'react'

type TarjetaEspeciadadProp = {
    nombre: string;
    descripcion: string;
    imagenUrl: string;
}

const TarjetaEspecialidad: React.FC<TarjetaEspeciadadProp> = ({nombre, descripcion, imagenUrl,id}) => {
  return (
    <div id={id}>
        <h1>{nombre}
        </h1>
        <p>
            {descripcion}
        </p>
        <div>
        <img src={imagenUrl} alt= {`${nombre} img`}></img>
        </div>
    </div>
  )
}

export default TarjetaEspecialidad