import React from 'react'
import sobreMiImg from './assets/image1.png'
import Header from './components/Header'
import Footer from './components/Footer'
import './sytles/SobreMi.css'

export const SobreMi = () => {
  return (
    <div>
    <Header/>
    <div className='sobreMi'>
    <div>
        <h1>Marilian Gonzales</h1>
        <img src={sobreMiImg} alt ="sobremiImg"></img>
    </div>
    <div>
        <h3>Odontologo Marilian Gonzales</h3>
        <h3>Graduada de la Universidad de los Andes</h3>
        <h3>Especialida en Ortodoncia y Estetica dental</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur officiis voluptas sed temporibus aliquid. Animi inventore laborum eum labore corrupti molestias, quasi dignissimos cupiditate repellat hic nam maxime sequi.
        </p>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
