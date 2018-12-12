import React, {Component} from 'react';
import classes from './ListDisplay.module.css';
import AlphabetPicker from '../AlphabetPicker/AlphabetPicker';


class ListDisplay extends Component{

  state = {
    addresses: [],
    filteredAddresses: [],
    currentFilter: ''
  }

  componentWillReceiveProps(nextProps) {
    let addresses = [...nextProps.displayedAddresses.sort((a,b) => {
      return a["last"].localeCompare(b["last"]);
    })];
    this.setState({
     addresses: addresses,
     filteredAddresses: addresses,
    })
  
  }

  handleItemClicked = (i) => {
    this.props.clicked(i);
  }

  handleAlphaClicked = (alpha) => {
    if(this.state.currentFilter === alpha) {
      this.setState({filteredAddresses: this.state.addresses});
      return;
    }
    let newAddresses = [...this.state.addresses].filter((entry) => {
      return entry.last[0] === alpha;
    });
    this.setState({
      filteredAddresses: newAddresses,
      currentFilter: alpha
    });
  }
  
  render() {
    // let addresses = [...this.props.displayedAddresses.sort((a,b) => {
    //   return a["last"].localeCompare(b["last"]);
    // })]
    return(
      <main className={classes.ListDisplayArea}>
      <AlphabetPicker clicked={(alpha) => this.handleAlphaClicked(alpha)} />
        <ul>
          {this.state.filteredAddresses.map((address, i) => (        
            <li 
              key={address.first + address.mobile}
              iter={i}
              onClick={() => this.handleItemClicked(i)}
            >
              {address.first} {address.last}
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default ListDisplay;