import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Article from './components/Article';
import TarjetaEspecialidad from './components/TarjetaEspecialidad';
import imgEspecialidad from './assets/imagenEspecialidad.png';
import Footer from './components/Footer';
import Header from './components/Header';
import './sytles/Especialidades.css'

const articlesData = [
  {
    id: "1",
    nombre: "Odontología General",
    descripcion: "Nuestros servicios incluyen limpieza dental profesional, rehabilitación oral, resinas estéticas, y tratamientos de caries",
    imagenUrl: imgEspecialidad,
  },
  {
    id: "2",
    nombre: "Ortodoncia y Ortopedia",
    descripcion: "Nuestros servicios incluyen el diagnóstico y corrección de la posición de los dientes y la mandíbula en niños y adultos, garantizando una sonrisa alineada, funcional y saludable",
    imagenUrl: imgEspecialidad,
  },
  {
    id: "3",
    nombre: "Cirugía Bucal",
    descripcion: "Nuestros servicios incluyen la extracción de piezas dentales, retiro de lesiones, corrección de fracturas, y cirugía ortognática, cuidando de tus dientes, mucosa y tejidos accesorios.",
    imagenUrl: imgEspecialidad,
  },
  {
    id: "4",
    nombre: "Estética",
    descripcion: "Nuestros tratamientos mejoran la apariencia de tu sonrisa, desde blanqueamientos dentales hasta diseños de sonrisa con carillas de composite. Modificamos la forma, color y tamaño de los dientes para armonizarlos con tus encías y labios.",
    imagenUrl: imgEspecialidad,
  },
  {
    id: "5",
    nombre: "Rehabilitación e Implantología",
    descripcion: "Ofrecemos un tratamiento quirúrgico diseñado para reemplazar dientes perdidos mediante implantes de titanio que sustituyen la raíz ausente, seguido del diseño de coronas dentales para adaptarse a la nueva raíz, restaurando la función y estética de tu sonrisa",
    imagenUrl: imgEspecialidad,
  },
  {
    id: "6",
    nombre: "Odontopediatría",
    descripcion: "En nuestras consultas, nos enfocamos en atender a todos los niños con cuidado y dedicación. Creamos un ambiente amigable y acogedor para que cada visita sea una experiencia positiva, independientemente de las necesidades específicas de cada niño. Nuestro equipo está comprometido en hacer que todos los niños se sientan cómodos y seguros durante su atención dental.",
    imagenUrl: imgEspecialidad,
  },
  {
    id: "7",
    nombre: "Endodoncia",
    descripcion: "Nuestros tratamientos de endodoncia se enfocan en el cuidado de la pulpa dental y los conductos, asegurando la salud y el bienestar de tus dientes desde adentro hacia afuera.",
    imagenUrl: imgEspecialidad,
  },
];

const Especialidad = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const especialidad = query.get('id');

  // Create refs for each article
  const refs = useRef(articlesData.reduce((acc, value) => {
    acc[value.id] = React.createRef<HTMLDivElement>();
    return acc;
  }, {} as { [key: string]: React.RefObject<HTMLDivElement> }));

  // Scroll to the corresponding article based on the id from the query
  const scrollToEspecialidad = (id: string | null) => {
    if (id && refs.current[id]) {
      setTimeout(() => {
        refs.current[id].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
    }
  };

  useEffect(() => {
    window.scrollTo(0,0)
    scrollToEspecialidad(especialidad);
  }, [especialidad]);

  const renderArticles = (articles: typeof articlesData) => {
    return articles.map((article) => (
      <TarjetaEspecialidad
        key={article.id}
        id={article.id}
        nombre={article.nombre}
        descripcion={article.descripcion}
        imagenUrl={article.imagenUrl}
        ref={refs.current[article.id]} // Attach the corresponding ref to each article
      />
    ));
  };

  return (
    <div>
      <Header />
      <Article title="Especialidades" textContent="Descubre Nuestras Áreas de Especialización" />
      <div className="contenedorEspecialidades">
        {renderArticles(articlesData)}
      </div>
      <Footer />
    </div>
  );
};

export default Especialidad;
