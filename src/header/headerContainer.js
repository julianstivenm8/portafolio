import React {Component} from 'react';
import Header from './header.js'

class HeaderContainer extends Component {
  handleSummit = value =>{
this.changeView
  }
  render() {
    return(
      <GoTo
          handleSummit={this.handleSummit}
      />
    )
  }
}

export default HeaderContainer;
