import React, { PureComponent } from 'react';
import '../App.css';
import PropTypes from 'prop-types'


class Media extends PureComponent {

  state = {
    type: 'uno'
}

handleClick=(event)=>{
  this.setState({
    type: 'dos'
  })
}

  render() {
    return (
      <div className="App">


       <div className="App-container" onClick={this.handleClick}>
         <img
           src={this.props.cover}
           alt=''
           width={260}
           height={160}
         />
         <h3>{this.props.title}</h3>
         <h3>{this.props.type}</h3>
       </div>

  </div>

    );
  }
}
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.string,
}
export default Media;
