import React, { Component } from 'react';
import '../App.css';
import Logo from '../icons/components/logo.js';
import MenuHamburguesa from '../icons/components/menu.js';
import Xmenu from '../icons/components/xMenu.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
// var UniqeIdMixin = require('unique-id-mixin');
class Header extends Component {

  state = {
    modalVisible: false,
    burgerEnter: 'burgerEnter',
    backMenu: -100,
    changeView:0,
     // burgerEnter: this.getNextUid('hamburguesaEnter'),
     // burgerBack: this.getNextUid('hamburguesaBack'),
  }



//  Mov (){
//    // this.setState({burgerEnter:this.getNextUid('hamburguesaEnter') });
//    // this.setState({burgerBack:this.getNextUid('hamburguesaBack') })
//    // this.state.burgerEnter: setState.document.getElementsById('hamburguesaEnter'),
//    // this.state.burgerBack: setState.getElementsById('hamburguesaBack'),
//    this.state.burgerEnter.addEventListener(
//      'touchstart',function() {
//        this.state.burgerBack.classList.toggle('active');
//      }
//    )
// }
// handleClick=(event)=>{
//
//        if(this.state.burgerEnter) {
//        this.state.burgerBack.classList.toggle('active');
//        }
// }
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
    // let burgerEnter = UniqeIdMixin.getNextUid('date-input'),
    //       burgerBack = this.getNextUid('date-hint');
    //       this.state.burgerEnter.addEventListener(
    //         'touchstart',function() {
    //           this.state.burgerBack.classList.toggle('active');
    //         }
    //       )


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
              <Logo
                height={47.8}
                width={100}
                color="white"
                viewBox="0 0 300 145"
              />
            </figure>
          </div>
          {/* window.matchMedia('(max-width:600px)') */}
      {/* {this.state.modalVisible &&  */}
        <header id="header" className="header" style={{left : this.state.backMenu + '%'}}>

          <figure className="logoCel">
            <div  className="hamburguesa" id='burgerBack' onClick={this.handleCloseClick}>
            <MenuHamburguesa
              size={45}
              color="white"
            />
            </div>
            <Logo
              height={47.8}
              width={100}
              color="white"
              viewBox="0 0 300 145"
            />
          </figure>
          <nav className="menuUno">

              <li >
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
            <Logo
              height={120}
              width={251}
              color="white"
              viewBox="0 0 300 145"
            />
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
