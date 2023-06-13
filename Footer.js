import React from 'react';
import './Footer.css';
import Atos from './Images/Atos.png';


export default function Footer() {
  return (
    <div>
       <div>
      <div className=' Rectangle12'></div>
      <p className='footer_contentt'>© Copyright 2022 | CX Practice | For Internal Use Only</p>

      <img src={Atos} alt='logo' className='footer_atos'/>
      
     
      </div>

    </div>
  )
}
