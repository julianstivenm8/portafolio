import React, { Component } from 'react';
import '../App.css';
import Header from '../header/header.js'
class About extends Component {

  render() {
    return (
 <div className="aboutPadre">
  <div className='aboutHijoUno'>
    <div className='aboutHijoDosUno '>
<p>Estudiante de Diseño de Medios Interactivos con interés en trabajar en una industria competitiva, que esté preocupada en la creatividad, el conocimiento y la innovación, más específicamente en las áreas de Desarrollo Front-end, Desarrollo de Productos digitales con metodologías ágiles y Ux, como también Diseño de Experiencias Interactivas.</p>
    </div>
  </div>
  <div className='aboutHijoDos'>
 <img src={require('../resources/images/about/julianMadrid.png')} className='imagenJulian'/>
  </div>
 </div>
    );
  }
}

export default About;
