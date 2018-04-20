import React, { Component } from 'react';
import Slider from "react-slick";
import './slice.css';

const slider = Slider.default;

const CustomDots = (props) => {
  const { next, prev, slideCount, slidesToScroll, goto } = props;
  const dotCount = Math.ceil(slideCount / slidesToScroll);
  const dots = Array.from(Array(dotCount));

  return (<ul className="custom-dots">
    <li onClick={prev}>Prev</li>
    {dots.map((dot, i) => (
      <li key={i} onClick={() => goto(i)} />)
    )}
    <li onClick={next}>Next</li>
  </ul>);
};

 class Slice extends Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.goto = this.goto.bind(this);
  }
  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
  }

  goto(i) {
    this.slider.slickGoTo(i);
  }

  render() {
    const settings = {
      dots: false,
      autoplay: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    return (<div className="slide-wrapper">
        <Slider {...settings} ref={node => this.slider = node}>
          <div className="slide slide-one">One</div>
          <div className="slide slide-two">Two</div>
          <div className="slide slide-three">Three</div>
        </Slider>

        <CustomDots {...settings} next={this.next} prev={this.prev} goto={this.goto} slideCount={3} />
    </div>);
  }
}
export default Slice
