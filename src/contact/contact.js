import React, { Component } from 'react';
import '../App.css';
import Header from '../header/header.js'
class Contact extends Component {

  render() {
    return (
 <div className="contactPadre">
  <div className='contactHijoUno'>
    <div className='contactHijoUnoUno '><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. </p>  </div>
    <div className='contactHijoUnoDos '>
       <div className='contactBox'>First Name*</div>
       <div className='contactBox'>Last Name</div>
       <div className='contactBox'>Email*</div>
       <div className='contactBox'>Country</div>
    </div>
    <div className='contactHijoUnoTres '>
      <div className='contactMensajeUno'>Message*</div>
      <div className='contactMensajeBox'></div>
      <div className='contactMensajeDos'>*Request field</div>
     </div>
    <div className='contactHijoUnoCuatro '>
       <div className='send'>Send</div>
    </div>
  </div>
 </div>
    );
  }
}

export default Contact;
