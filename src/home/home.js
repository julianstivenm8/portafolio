import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Projectlist from '../projectsView/projectlist.js';
import data from '../api.json';
import In from '../icons/components/in.js'
import Be from '../icons/components/be.js'
import Logo from '../icons/components/logo.js'
import Lsvg from '../icons/components/Lsvg.js'
class Home extends Component {

  render() {
    return (
      <div className="trabajos">

        {/* <div className="centro contenedor"> */}

           <article className="trabajo01">
             <h4 className="textinfo">2017</h4>
             <figure className="ilustracion">
               <Lsvg
                 size={478}
                 color="white"
               />
              { //<img className="laCasaImg" src="./resources/images/home/ilustracionLaCasaDelTurbo.png" alt="ilustracionLaCasaDelTurbo"/>
}
             </figure>
             <div className="descripcion">
               <h2 className="textProjet">La casa del turbo</h2>
               <h3 className="textinfo">web page</h3>
             </div>
             </article>

             <article className="trabajo01">
               <div className="descripcion">
                 <h2 className="textProjet">La casa del turbo</h2>
                 <h3 className="textinfo">web page</h3>
               </div>
               <figure className="ilustracion">
                 <Lsvg
                   size={478}
                   color="white"
                 />
               </figure>
                <h4 className="textinfo">2017</h4>

               </article>

       {/* </div> */}
      {// <Projectlist data={data}/>
    }
  </div>

    );
  }
}

export default Home;
