// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { ItemListContaines } from './components/ItemListContainer/ItemListContaines'

import { Navegador } from './components/Navegador/Navegador';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <Router>
      <div className='container'>
        <Navegador />
        <Routes>
        <Route path='/' element ={<ItemListContaines greeting='saludo app'/>} />
        <Route path='/categoria' element ={<ItemListContaines greeting='saludo app'/>} />
        {/* <Route path='/' element ={<ItemDetailContainer />} /> */}


        <Route path='*' element ={<Navigate to='/'/>} />
        </Routes>
        <ItemDetailContainer />


      </div>
    </Router>
  )
}

export default App
