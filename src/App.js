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
import { BrowserRouter as Router, Route, Link ,IndexRoute } from 'react-router-dom'
class App extends Component {

state={

}




  render() {

    return (

      <div className="App">

        {/* <GoTo
            handleSummit={this.handleSummit}
        /> */}
        <div className="wrapper">

          {/*  */}
          <Router>
           <div>

        <Header/>

        <div className="body">
        <section id="correo" className="correo">
         <div className="contDer">
        <h3 className="textEmail">julianstivenm8@gmail.com</h3>
        </div>

        </section>

        <Route exact path='/portafolio' component={Home}/>
        <Route path='/projects' component={Projects}/>
        {/* <Route path='/projects' component={Topics}/> */}
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>


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
          </Router>
        </div>
        </div>
    );
  }
}
export default App;
