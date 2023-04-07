
import React from 'react'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'
export const NavBar = () => {
  return (
    <div className='navegador'>
        <p>Inicio</p>
        <p>Presupuestos</p>
        <CartWidget />
        
        
        
        
    </div>
  )
}
