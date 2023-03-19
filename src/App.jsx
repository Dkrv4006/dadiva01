import React from 'react'
import { GlobalStyle } from "./style/style";
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Os from './pages/Os';
 
export  const App = () => {
  return (
    <>
       <GlobalStyle/>
       <Header/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/os' element={<Os/>}/>
       </Routes>
    </>
  )
}
