import React from 'react'
import { GlobalStyle } from "./style/style";
import { Header } from './components/Header';

export  const App: React.FC = () => {
  return (
    <>

       <GlobalStyle/>
       <Header/>
    </>
  )
}
