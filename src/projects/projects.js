import React, { Component } from 'react';
import '../App.css';
import Lsvg from '../icons/components/Lsvg.js'
class Projects extends Component {

  render() {
    return (
      <div className="padre">
       <div className='hijo'>
         <div className='hijoDosUno '></div>
         <div className='hijoDosDos '></div>
       </div>
       <div className='hijo'>
         <div className='hijoTresUno '></div>
         <div className='hijoTresDos '></div>
         <div className='hijoTresTres '></div>
         <div className='hijoTresCuatro '></div>
       </div>
      </div>
    );
  }
}

export default Projects;
