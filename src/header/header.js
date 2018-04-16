import React, { Component } from 'react';
import '../App.css';
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
    changeView:0,
  }

handleOpenClick = (event) =>{
  this.setState({
      modalVisible:true,
      // burgerEnter:'active',
      backMenu: 0 ,
  })

  console.log(this.state.modalVisible)
}
handleCloseClick =(event)=>{
  this.setState({
    modalVisible:false,
      backMenu: -100 ,
  })
}
handleGoHome =(event)=>{
  this.setState({
    changeView:0,
  })
}
handleGoProjects =(event)=>{
  this.setState({
    changeView:1,
  })
}
handleGoAbout =(event)=>{
  this.setState({
    changeView:2,
  })
}
handleGoContact =(event)=>(
  this.setState({
    changeView:3,
  })
)

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
          <nav className="menuUno" >
              <li>
                <Link to='/' >
                <a className="textMenu" onClick={this.handleGoHome} href="index.html">
                Home
                </a>
              </Link>
              </li>

          </nav>
          <nav className="menuUno">
              <li>
                <Link to='/projects' >
                  <a className=" textMenu" onClick={this.handleGoProjects} href="projects.html">
                  Projects
                  </a>
                </Link>
              </li>
          </nav>
          <figure className="logo">
            <img className="imgLogo" src={require("../resources/images/home/logoGrande.png")} alt="julianMadrid"/>
          </figure>
          <nav className="menuUno">
              <li>
                <Link to='/about' >
                  <a className="textMenu" onClick={this.handleGoAbout} href="about.html">
                  About
                  </a>
                </Link>
              </li>
                </nav>
                <nav className="menuUno">
              <li>
                <Link to='/contact'>
                  <a  className="textMenu" onClick={this.handleGoContacts} href="contact.html">
                  Contact
                  </a>
                </Link>
              </li>
            </nav>

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
