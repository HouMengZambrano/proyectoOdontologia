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
    <div>
        <div className = "base_article">
                <img src = {articleImg} alt= "articleImg" width={100}></img>
            </div>
            <div>
                <h1>{title}</h1>
                <p>
                    {textContent}
                </p>
            </div>
            <SolicitarTurnoBoton/>
    </div>
  )
}

export default Article