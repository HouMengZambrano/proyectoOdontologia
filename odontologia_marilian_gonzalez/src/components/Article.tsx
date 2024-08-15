import React from 'react'
import SolicitarTurnoBoton from './SolicitarTurnoBoton'
import articleImg from "../assets/image4.png"
import '../sytles/Article.css'

type ArticleProps = {
    title: string;
    textContent: string;
}

const Article: React.FC<ArticleProps>= ({title, textContent}) => {
  return (
    <div className='article_container'>
        <div className = "base_article">
                <img src = {articleImg} alt= "articleImg" ></img>
        </div>
        <div className='article_title_and_description'>
              <h2>{title}</h2>
              <p>
                {textContent}
              </p>
        </div>
        <SolicitarTurnoBoton/>
    </div>
  )
}

export default Article