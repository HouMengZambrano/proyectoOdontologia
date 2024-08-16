import React from 'react'
import '../sytles/EspecialidadButton.css'
import { Link } from 'react-router-dom';

type EspecialidadBotonProps ={
  nombre: string;
  targetId: string;
}

const EspecialidadBoton: React.FC<EspecialidadBotonProps> = ({ nombre, targetId}) => {

  return (
    <Link key={targetId}
    to={{
      pathname: '/especialidad',
      search: `?id=${targetId}`,
    }} className="especialidadButton">
      {nombre}
    </Link>
  )
}

export default EspecialidadBoton