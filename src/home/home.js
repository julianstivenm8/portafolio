import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Projectlist from '../projectsView/projectlist.js';
import data from '../api.json';
import In from '../icons/components/in.js'
import Be from '../icons/components/be.js'
import Logo from '../icons/components/logo.js'
import Lsvg from '../icons/components/Lsvg.js'
import Header from '../header/header.js'
import { Link } from 'react-router-dom'
class Home extends Component {

  render() {
    return (
      <div className="trabajos">

        {/* <div className="centro contenedor"> */}



             <article className="trabajo01">
               <h4 className="textinfo">2016</h4>
               <Link to='/projects'>
               <figure className="ilustracion">
              <img className="laCasaImg" src={require("../resources/images/home/ilustracionVerbindung.png")} alt="ilustracionLaCasaDelTurbo"/>
               </figure>
</Link>
               <div className="descripcion">
                 <h2 className="textProjet">Verdindung</h2>
                 <h3 className="textinfo">game</h3>
               </div>
               </article>



             <article className="trabajo01">
               <div className="descripcion">
                 <h2 className="textProjet">Monucks</h2>
                 <h3 className="textinfo">business project</h3>
               </div>
                <Link to='/projectsMonucks'>
               <figure className="ilustracion">
                 <img className="laCasaImg" src={require("../resources/images/home/ilustracionMonuks.png")} alt="ilustracionLaCasaDelTurbo"/>
               </figure>
               </Link>
                <h4 className="textinfo">2016</h4>
               </article>
               <article className="trabajo01">
                 <h4 className="textinfo">2017</h4>
                 <figure className="ilustracion">
                <img className="laCasaImg" src={require("../resources/images/home/ilustracionLaCasaDelTurbo.png")} alt="ilustracionLaCasaDelTurbo"/>
                 </figure>
                 <div className="descripcion">
                   <h2 className="textProjet">Reina</h2>
                   <h3 className="textinfo">Movil App</h3>
                 </div>
                 </article>


       {/* </div> */}
      {// <Projectlist data={data}/>
    }
  </div>
    );
  }
}

export default Home;
