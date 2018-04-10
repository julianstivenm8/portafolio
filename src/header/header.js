import React, { Component } from 'react';
import '../App.css';
import Logo from '../icons/components/logo.js'
class Header extends Component {

  render() {
    return (
        <header id="header" className="header">
          <nav className="menuUno">
            <ul>
              <li >
                <a className="textMenu" href="index.html">Home</a>
              </li>
            </ul>
          </nav>
          <nav className="menuUno">
            <ul>
              <li>
                <a className=" textMenu" href="projects.html">projects</a>
              </li>
            </ul>
          </nav>
          <figure className="logo">
            <Logo
              height={120}
              width={251}
              color="white"
              viewBox="0 0 300 145"
            />
          </figure>
          <nav className="menuDos">
              <li>
                <a className="textMenu" href="about.html">about</a>
              </li>
                </nav>
                <nav className="menuDos">
              <li>
                <a className="textMenu" href="contact.html">contact</a>
              </li>
            </nav>
        </header>
    );
  }
}

export default Header;
