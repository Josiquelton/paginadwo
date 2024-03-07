import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Livro from "./assets/livro.jpg"
import Dark from "./assets/dark.svg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div className='ebook'>
      <img src={Livro} alt='capa'/><p/>
      <h1>Faça o<br/>Downlaond</h1><p/><p/>
      <h3>Aproveite o meu metodo e quebre qualquer tipo<br/>de duvida!</h3>
      <form action='https://portal-vendedor10.curriculum.com.br/wp-content/uploads/2016/06/15_habilidades_representante.pdf'  href='https://portal-vendedor10.curriculum.com.br/wp-content/uploads/2016/06/15_habilidades_representante.pdf' method='post' target='blank'>
              <Button variant="primary" type='submit'>Baixar Ebook</Button>
      </form>
      

    </div><p/>
    <footer>
    <button id='lightup' type='submit'><img src={Dark} alt='vetor'/></button>
    </footer>
      </div>
      
    </>
  )
}

export default App
