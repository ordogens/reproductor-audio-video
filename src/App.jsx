import './App.css'
import { NavBar } from "./header/NavBar"
import { Routes, Route } from 'react-router-dom'
import { Renderizador } from "./rederizador/Renderizador"
import { Home } from './home/Home'

export const App = () => {

  return (
    
    <div className='App'>
          <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/reproductores' element={<Renderizador/>} />
          <Route path='/parte2' element={<h1>Parte 1</h1>} />
        </Routes>
    </div>
    
  )
}


