import React from "react";
import '../App.css';
import Lsvg from '../icons/components/Lsvg.js';
import Header from '../header/header.js';
import { Route, Link  } from 'react-router-dom';
import Be from '../icons/components/be.js'

// import Slider from './slider/slider.js'
// import DemoCarousel  from './slice.js'

const Topic = ({ match }) => (
  <div >
    <p>{match.params.topicId}</p>
  </div>
);

const Projects = ({ match }) => (

  <div className="padre">

    <div className='hijo'>
      <div className='hijoDosUno'>
        {/* <img src={Imagen} alt="ilustracionLaCasaDelTurbo"/> */}
        {/* <DemoCarousel /> */}



{/* {this.Slider()} */}



 <img src={require('../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/> 
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
    <div className='projdesc'><h2>Process Step</h2></div>
    <div className='projdesc'>

        <Link to={`${match.url}/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.`}>
      <h3 className='projSpace'>  1 </h3>
      </Link>


        <Link to={`${match.url}/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.`}>
      <h3 className='projSpace'>  2   </h3>
      </Link>


        <Link to={`${match.url}/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.`}>
        <h3 className='projSpace'>  3   </h3>
      </Link>


        <Link to={`${match.url}/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.`}>
        <h3 className='projSpace'>  Final </h3>
      </Link>

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
    <div className='projdesc'><h3>Repositorio o url del proyecto:</h3></div>
    <div className='projdesc'>
      <figure className="be">
      <Be size={30} color="white" />
      </figure>

    </div>
  </div>
</div>
</div>
);
export default Projects;
