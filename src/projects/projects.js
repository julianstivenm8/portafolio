import React, { Component } from 'react';
import '../App.css';
import Lsvg from '../icons/components/Lsvg.js';
import Header from '../header/header.js'
import { Route, Link  } from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
class Projects extends Component {

Topico(){
  const Topics = ({ match }) => (
    <div>
    <div className='hijoTresDos '>
      <h2 className='projdesc'>Process Step</h2>
      <div className='projdesc'>
     <Link to={`${match.url}/rendering`}>  <h3>1</h3></Link>
     <Link to={`${match.url}/rendering`}>  <h3 className='projSpace'>2</h3></Link>
     <Link to={`${match.url}/rendering`}>  <h3 className='projSpace'>3</h3></Link>
     <Link to={`${match.url}/rendering`}>  <h3 className='projSpace'>Final</h3></Link>
      </div>
    </div>
    <div className='hijoTresTres'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.
      </p>
    </div>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
    </div>
);
}

  render() {
    return (
      <div className="padre">
       <div className='hijo'>
         <div className='hijoDosUno'>
    {/* <img src={Imagen} alt="ilustracionLaCasaDelTurbo"/> */}
    <img src={require('../resources/images/project/portafolioWeb.jpg')}
    className='imagenPrincipal'
   />
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
         {this.Topico()}
         {/* <div className='hijoTresDos '>
           <h2 className='projdesc'>Process Step</h2>
           <div className='projdesc'>
           <h3>1</h3>
           <h3 className='projSpace'>2</h3>
           <h3 className='projSpace'>3</h3>
           <h3 className='projSpace'>Final</h3>
           </div>
         </div>
         <div className='hijoTresTres '>
           {this.Topico()}
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.
           </p>
         </div> */}
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
  }
}

export default Projects;
