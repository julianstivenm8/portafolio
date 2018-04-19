import React from "react";
import '../App.css';
import Lsvg from '../icons/components/Lsvg.js';
import Header from '../header/header.js';
import { Route, Link  } from 'react-router-dom';
// import Slider from './slider/slider.js'
// import DemoCarousel  from './slice.js'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Projects = ({ match }) => (

  <div className="padre">

    <div className='hijo'>
      <div className='hijoDosUno'>
        {/* <img src={Imagen} alt="ilustracionLaCasaDelTurbo"/> */}
        {/* <DemoCarousel /> */}



{/* {this.Slider()} */}




{/* <img src={require('../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/> */}
</div>
<div className='hijoDosDos '>
  <div className='choose'></div>
</div>
</div>

<div className='hijoDos'>
  <div className='hijoTresUno '>
    <h2 className='projdesc'>La casa del turbo</h2>
    <div className='projdesc'>
      <h3>brand maker</h3>
      <h3 className='projSpace'>2017</h3>
    </div>
  </div>
  <div className='hijoTresDos '>
    <h2 className='projdesc'>Process Step</h2>
    <div className='projdesc'>
      <h3>
        <Link to={`${match.url}/la jefota`}>1</Link>
      </h3>
      <h3 className='projSpace'>
        <Link to={`${match.url}/la recontrajefota`}>2</Link>
      </h3>
      <h3 className='projSpace'>
        <Link to={`${match.url}/y la otra`}>3</Link>
      </h3>
      <h3 className='projSpace'>
        <Link to={`${match.url}/finalisimo`}>Final</Link>
      </h3>
    </div>
  </div>

  <div className='hijoTresTres'>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <p>Please select a Step.</p>}
    />
  </div>
  <div className='hijoTresCuatro '>
    <h2 className='projdesc'>Repositorio o url del proyecto:</h2>
    <div className='projdesc'>
      <h3>brand maker</h3>
      <h3 className='projSpace'>2017</h3>
    </div>
  </div>
</div>
</div>
);
export default Projects;
