// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { ItemListContaines } from './components/ItemListContainer/ItemListContaines'
import { Navegador } from './components/Navegador/Navegador';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <div className='container'>
        <Navegador />
        <Routes>
        <Route path='/' element ={<ItemListContaines greeting='saludo app'/>} />
        <Route path='/categoria' element ={<ItemListContaines greeting='saludo app'/>} />
        <Route path='/categoria' element ={<ItemDetailContainer greeting='saludo app'/>} />

        <Route path='*' element ={<Navigate to='/'/>} />
  
        </Routes>

      </div>
    </Router>
  )
}

export default App
