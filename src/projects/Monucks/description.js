import React from 'react';
import { Link, Route } from 'react-router-dom'
import Be from '../../icons/components/be.js'
import './description.css';


class descriptionProject extends React.Component {

  constructor(props){
    super(props)
    this.state={
      bajo:4,
    }
  }

  componentDidMount() {
    try{
      this.setState({headerControl:1});
      console.log(this.state.headerControl);
    }catch(error){
      console.log(error)
    }
 }

  adicionarUno(){
    try{
      this.setState({bajo:1});
      console.log(this.state.bajo);
    }catch(error){
      console.log(error)
    }
  }
  adicionarDos(){
    try{
      this.setState({bajo:2});
      console.log(this.state.bajo);
    }catch(error){
      console.log(error)
    }
  }
  adicionarTres(){
    try{
      this.setState({bajo:3});
      console.log(this.state.bajo);
    }catch(error){
      console.log(error)
    }
  }
  adicionarFinal(){
    try{
      this.setState({bajo:4});
      console.log(this.state.bajo);
    }catch(error){
      console.log(error)
    }
  }

  aparece(){
    if (this.state.bajo == 1) {
      return  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.</p>
    } else if (this.state.bajo == 2) {
      return  <p>Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.</p>
    } else if (this.state.bajo == 3) {
      return  <p>Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.</p>
    } else if (this.state.bajo == 4) {
      return  <p>Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et massa sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non placerat metus. Suspendisse fermentum eu est ac ullamcorper. Quisque porta tincidunt nibh, eu sagittis leo lacinia id. Duis egestas, augue sit amet venenatis.</p>
    }
  }

  render() {
    return (
      <div className='descripcionProjecto'>
        <div className='tituloProjecto '>
          <h2 className='estiloFuente'>Monucks</h2>
          <div className='estiloFuente'>
            <h3>Game</h3>
            <h3 className='fecha'>2017</h3>
          </div>
        </div>
        <div className='pasosProceso '>
          <div className='estiloFuente'><h2>Process Step</h2></div>

          <div className='estiloFuente'>
            <div className='numberStep'  onClick={this.adicionarUno.bind(this)} >  1 </div>
            <div className='numberStep' onClick={this.adicionarDos.bind(this)}>  2   </div>
            <div className='numberStep' onClick={this.adicionarTres.bind(this)}>  3   </div>
            <div className='numberStep' onClick={this.adicionarFinal.bind(this)}>  Final </div>
          </div>

          <div className='hijoTresTres'>

            {this.aparece()}
          </div>
        </div>
        <div className='hijoTresCuatro '>
          <div className='estiloFuente'><h3>Repositorio o url del proyecto:</h3></div>
          <div className='estiloFuente'>
            <figure className="be">
              <Be size={30} color="white" />
            </figure>
          </div>
        </div>
      </div>
    )}
  }

  export default descriptionProject;
