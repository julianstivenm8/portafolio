import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Projectlist from './projectsView/projectlist.js';
import data from './api.json';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header id="header" className="header contenedor">
          <nav className="menuUno">
            <ul>
              <li>
                <a className="textMenu" href="index.html">Home</a>
              </li>
              <li>
                <a className=" textMenu" href="projects.html">projects</a>
              </li>
            </ul>
          </nav>
          <figure className="logo">
            <img className="logoImg"src="./resources/images/home/logoGrande.png" alt="Julian logotipo"/>
          </figure>
          <nav className="menuDos">
            <ul>
              <li>
                <a className="textMenu" href="about.html">about</a>
              </li>
              <li>
                <a className="textMenu" href="contact.html">contact</a>
              </li>
            </ul>
          </nav>
        </header>
  <div className="body">
        <div className="centro contenedor">
         <section id="correo" className="correo">

           <h3 className="textEmail">julianstivenm8@gmail.com</h3>
         </section>
         <section id="trabajos" className="trabajos">

           <article className="trabajo01">
             <h4 className="textinfo">2017</h4>
             <figure className="ilustracion">
               <img className="laCasaImg" src="./resources/images/home/ilustracionLaCasaDelTurbo.png" alt="ilustracionLaCasaDelTurbo"/>
             </figure>
             <div className="descripcion">
               <h2 className="textProjet">La casa del turbo</h2>
               <h3 className="textinfo">web page</h3>
             </div>
             </article>

         </section>
         <section id="redes" className="redes">
           <figure className="be">
             <img className="beImg" src="./resources/images/home/Behance.png" alt="Behance"/>
           </figure>
           <figure className="in">
             <img className="inImg" src='./resources/images/home/in' alt="In"/>
           </figure>
         </section>
       </div>
       <Projectlist data={data}/>
  </div>

      </div>
    );
  }
}

export default App;
