import React, { Component } from 'react';
import '../App.css';
import './header.css';
import Logo from '../icons/components/logo.js';
import MenuHamburguesa from '../icons/components/menu.js';
import Xmenu from '../icons/components/xMenu.js';
import LogoPeque from '../icons/components/logoPeque.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
// var UniqeIdMixin = require('unique-id-mixin');
class Header extends Component {

  state = {
    modalVisible: false,
    burgerEnter: 'burgerEnter',
    backMenu: -100,
    headerControl:0,
  }

handleOpenClick = (event) =>{
  this.setState({
      modalVisible:true,
      backMenu: 0 ,
  })

  console.log(this.state.modalVisible)
}
handleCloseClick =(event)=>{
  this.setState({
    modalVisible:false,
      backMenu: -100 ,
      headerControl:0
  })
}
moverHome(){
  try{
    this.setState({headerControl:0});
    console.log(this.state.headerControl);
  }catch(error){
    console.log(error)
  }
}
moverProjects(){
  try{
    this.setState({headerControl:1});
    console.log(this.state.headerControl);
  }catch(error){
    console.log(error)
  }
}
moverAbout(){
  try{
    this.setState({headerControl:2});
    console.log(this.state.headerControl);
  }catch(error){
    console.log(error)
  }
}
moverContact(){
  try{
    this.setState({headerControl:3});
    console.log(this.state.headerControl);
  }catch(error){
    console.log(error)
  }
}

aparece(){
  if (this.state.headerControl == 0) {
    return  <div className="headerDos">
    <nav className="menuUno" >
        <li>
          <Link to='/portafolio' >
          <a className="textMenu" onClick={this.moverHome.bind(this)} href="index.html">
          Home
          </a>
        </Link>
        </li>

    </nav>
    <nav className="menuUno">
        <li>
          <Link to='/projects' >
            <a className=" textMenu" onClick={this.moverProjects.bind(this)}  href="projects.html">
            Projects
            </a>
          </Link>
        </li>
    </nav>
    <figure className="logo">
      <Logo
        height={150-40}
        width={300-40}
        viewBox="0 0 300 150"
        color="white"
      />
    </figure>
    <nav className="menuUno">
        <li>
          <Link to='/about' >
            <a className="textMenu" onClick={this.moverAbout.bind(this)}  href="about.html">
            About
            </a>
          </Link>
        </li>
          </nav>
          <nav className="menuUno">
        <li>
          <Link to='/contact'>
            <a  className="textMenu" onClick={this.moverContact.bind(this)}  href="contact.html">
            Contact
            </a>
          </Link>
        </li>
      </nav>
 </div>
  } else if (this.state.headerControl == 1) {
    return  <div className="headerProjects">
      <figure className="logoPeque">
        <LogoPeque
          size={100}
          color="white"
        />
      </figure>
      <div className="headerProjects">
    <nav className="menuUno" >
        <li>
          <Link to='/portafolio' >
          <a className="textMenu" onClick={this.moverHome.bind(this)} href="index.html">
          Home
          </a>
        </Link>
        </li>
    </nav>
    <nav className="menuUno">
        <li>
          <Link to='/projects' >
            <a className=" textMenu" onClick={this.moverProjects.bind(this)}  href="projects.html">
            Projects
            </a>
          </Link>
        </li>
    </nav>

    <nav className="menuUno">
        <li>
          <Link to='/about' >
            <a className="textMenu" onClick={this.moverAbout.bind(this)}  href="about.html">
            About
            </a>
          </Link>
        </li>
          </nav>
          <nav className="menuUno">
        <li>
          <Link to='/contact'>
            <a  className="textMenu" onClick={this.moverContact.bind(this)}  href="contact.html">
            Contact
            </a>
          </Link>
        </li>
      </nav>
      </div>
  </div>
  } else if (this.state.headerControl == 2) {
    return  <div className="headerAbout">
      <figure className="logoPeque">
        <LogoPeque
          size={100}
          color="white"
        />
      </figure>
      <div className="headerAbout">
    <nav className="menuUno" >
        <li>
          <Link to='/portafolio' >
          <a className="textMenu" onClick={this.moverHome.bind(this)} href="index.html">
          Home
          </a>
        </Link>
        </li>
    </nav>
    <nav className="menuUno">
        <li>
          <Link to='/projects' >
            <a className=" textMenu" onClick={this.moverProjects.bind(this)}  href="projects.html">
            Projects
            </a>
          </Link>
        </li>
    </nav>

    <nav className="menuUno">
        <li>
          <Link to='/about' >
            <a className="textMenu" onClick={this.moverAbout.bind(this)}  href="about.html">
            About
            </a>
          </Link>
        </li>
          </nav>
          <nav className="menuUno">
        <li>
          <Link to='/contact'>
            <a  className="textMenu" onClick={this.moverContact.bind(this)}  href="contact.html">
            Contact
            </a>
          </Link>
        </li>
      </nav>
      </div>
    </div>
    } else if (this.state.headerControl == 3) {
      return  <div className="headerContact">
        <figure className="logoPeque">
          <LogoPeque
            size={100}
            color="white"
          />
        </figure>
        <div className="headerContact">
      <nav className="menuUno" >
          <li>
            <Link to='/portafolio' >
            <a className="textMenu" onClick={this.moverHome.bind(this)} href="index.html">
            Home
            </a>
          </Link>
          </li>
      </nav>
      <nav className="menuUno">
          <li>
            <Link to='/projects' >
              <a className=" textMenu" onClick={this.moverProjects.bind(this)}  href="projects.html">
              Projects
              </a>
            </Link>
          </li>
      </nav>

      <nav className="menuUno">
          <li>
            <Link to='/about' >
              <a className="textMenu" onClick={this.moverAbout.bind(this)}  href="about.html">
              About
              </a>
            </Link>
          </li>
            </nav>
            <nav className="menuUno">
          <li>
            <Link to='/contact'>
              <a  className="textMenu" onClick={this.moverContact.bind(this)}  href="contact.html">
              Contact
              </a>
            </Link>
          </li>
        </nav>
        </div>
      </div>
      }
}

  render() {

    return (
        <div>
          <div className='headerCell'>
            <figure className="logoCel" >
              <div className="hamburguesa" id={this.state.burgerEnter}  onClick={this.handleOpenClick}>
              <MenuHamburguesa
                size={45}
                color="white"
              />
              </div>
              <LogoPeque
                size={100}
                color="white"
              />
            </figure>
          </div>
        <header id="header" className="header" style={
          {left : this.state.backMenu + '%'}
         }>

          <figure className="logoCel">
            <div  className="hamburguesa" id='burgerBack' onClick={this.handleCloseClick}>
            <Xmenu
              size={45}
              color="white"
            />
            </div>

            <LogoPeque
              size={100}
              color="white"
            />
          </figure>


  {this.aparece()}

        </header>
      {/* } */}
{/* {this.Mov()} */}
</div>
    );
  }
}
Header.propTypes = {
  changeView: PropTypes.number,

}
export default Header;
