import './App.css'
import EspecialidadesArticle from './components/EspecialidadesArticle'
import FilosofiaArticle from './components/FilosofiaArticle'
import Footer from './components/Footer'
import Header from './components/Header'
import IntroArticle from './components/IntroArticle'
import SloganArticle from './components/SloganArticle'

function App() {
 
  return (
    <>
      <Header/>
      <div className='main'>
      <IntroArticle/>
      <SloganArticle/>
      <EspecialidadesArticle/>
      <FilosofiaArticle/>
      </div>
      <Footer/>
    </>
  )
}

export default App
