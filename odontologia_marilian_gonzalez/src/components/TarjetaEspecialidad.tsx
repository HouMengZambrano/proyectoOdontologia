import { forwardRef } from 'react';
import "../sytles/TarjetaEspecialidad.css"

type TarjetaEspeciadadProp = {
    id: string;
    nombre: string;
    descripcion: string;
    imagenUrl: string;
};

const TarjetaEspecialidad = forwardRef<HTMLDivElement, TarjetaEspeciadadProp>(
  ({ id, nombre, descripcion, imagenUrl }, ref) => {
    return (
      <div ref={ref} id={id} className='especialidad_tarjeta_container'>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <div className='especialidad_img_container'>
          <img src={imagenUrl} alt={`${nombre} img`} />
        </div>
      </div>
    );
  }
);

export default TarjetaEspecialidad;
