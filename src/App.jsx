// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { ItemListContaines } from './components/ItemListContainer/ItemListContaines'
import  Navegador from './components/Navegador/Navegador';

import { ItemDetailBatch } from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCounter } from './components/ItemCounter/ItemCounter';

function App() {

  const onAdd = (cantidad) => {
    console.log(cantidad)
  }

  return (
    <Router>
      <div className='container'>
        <Navegador />
        <Routes>
        <Route path='/' element ={<ItemListContaines greeting='Bienvenidos'/>} />
        <Route path='/categoria/:cid' element ={<ItemListContaines greeting='Bienvenidos'/>} />
        <Route path='/detalle/:pid' element ={<ItemDetailBatch />} />

        <Route path='*' element ={<Navigate to='/'/>} />
        </Routes>

        <ItemCounter onAdd={onAdd} />

      </div>
    </Router>
  )
}

export default App
