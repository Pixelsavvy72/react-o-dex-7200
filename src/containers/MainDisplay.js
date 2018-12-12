import React, {Component} from 'react';
import ListDisplay from '../components/ListDisplay/ListDisplay';

class MainDisplay extends Component {

  handleClickedItem = (i) => {
    this.props.handleDisplayDetails(i);
  }

  render () {
    return(
      <>
        <ListDisplay           
          displayedAddresses={this.props.displayedAddresses}
          clicked={(i) => this.handleClickedItem(i)}
        />              
      </>
    )
  }
}

export default MainDisplay;