import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel axis="horizontal|vertical" showThumbs={true|false} showArrows={true|false}  dynamicHeight emulateTouch>
                <div>
                    <img src={require('../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={require('../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel
