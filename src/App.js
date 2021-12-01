import React, { Component } from 'react';
import {  Routes, Route, Link  } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*Aca deben ir los links de navegacion*/}
          <Link to='/page1'>Page 1</Link>
          <Link to='/page2'>Page 2</Link>
        </nav>
        {/* Aca tienes que agreager algo para que las rutas funcionen*/}
        <Routes>
            <Route path='/' element={ <Page1 />} />
            <Route path='/page1' element={ <Page1 />} />
            <Route path='/page2' element={ <Page2 />} />
            <Route path='*' element={< NotFound />} />
          </Routes>
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
