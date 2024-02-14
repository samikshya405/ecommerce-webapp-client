import React from 'react'
import Header from './Header'
import Footer from './Footer'

const ClientLayout = ({children}) => {
  return (
    <>
    <Header/>
    <main style={{minHeight:'70vh'}}>{children}</main>
    <Footer/>
    
    </>
  )
}

export default ClientLayout