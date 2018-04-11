import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Projectlist from './projectsView/projectlist.js';
import data from './api.json';
import In from './icons/components/in.js'
import Be from './icons/components/be.js'
import Logo from './icons/components/logo.js'
import Home from './home/home.js'
import Projects from './projects/projects.js'
import Header from './header/header.js'
import About from './about/about.js'
import Contact from './contact/contact.js'
class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="wrapper">

          <Header/>

      <div className="body">
   <section id="correo" className="correo">
       <div className="contDer">
     <h3 className="textEmail">julianstivenm8@gmail.com</h3>
     </div>

   </section>
    {/* <Home/> */}
    <Projects/>
    {/* <About/> */}
    {/* <Contact/> */}
  <section id="redes" className="redes">
    <div className="contIzq">
    <figure className="be">
      <Be size={23} color="white" />
    </figure>
    <figure className="in">
      <In size={23} color="white" />
    </figure>
    </div>
  </section>
 {/* <Projectlist data={data}/> */}
      </div>
        </div>


        </div>
    );
  }
}

export default App;
