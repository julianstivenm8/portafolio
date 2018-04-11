import React, { Component } from 'react';
import '../App.css';
import Logo from '../icons/components/logo.js';
import MenuHamburguesa from '../icons/components/menu.js';
import Xmenu from '../icons/components/xMenu.js';
class Header extends Component {

  render() {
    return (
        <header id="header" className="header">

          <figure className="logoCel">
            <div className="hamburguesa">
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
                <a className="textMenu" href="index.html">Home</a>
              </li>

          </nav>
          <nav className="menuUno">
              <li>
                <a className=" textMenu" href="projects.html">Projects</a>
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
                <a className="textMenu" href="about.html">About</a>
              </li>
                </nav>
                <nav className="menuUno">
              <li>
                <a className="textMenu" href="contact.html">Contact</a>
              </li>
            </nav>
        </header>
    );
  }
}

export default Header;
