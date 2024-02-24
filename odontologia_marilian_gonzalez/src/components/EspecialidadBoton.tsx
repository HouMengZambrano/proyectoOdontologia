import React from 'react'
import { Link } from 'react-router-dom';

type EspecialidadBotonProps ={
  nombre: string;
  targetId: string;
}

const EspecialidadBoton: React.FC<EspecialidadBotonProps> = ({ nombre, targetId}) => {

  return (
    <Link to={`/especialidad#${targetId}`} className="especialidadButton">
      {nombre}
    </Link>
  )
}

export default EspecialidadBoton