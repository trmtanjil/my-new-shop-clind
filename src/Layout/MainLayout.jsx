import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div>
         <div>
        <Header></Header>
       <div  >
         <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
    </div>
  )
}
