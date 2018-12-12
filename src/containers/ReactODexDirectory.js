import React, {Component} from 'react';
import MainDisplay from './MainDisplay';
import NewEntryForm from '../components/NewEntryForm/NewEntryForm';
import classes from './ReactODexDirectory.module.css';
import DetailsDisplay from '../components/DetailsDisplay/DetailsDisplay';

class ReactODexDirectory extends Component {
  state = {
    addressBook: [],
    // addressBook: seedData,
    first: "",
    last: "",
    phone: "",
    mobile: "",
    work: "",
    email: "",
    newEntryFormDisplayed: false,
    selectedEntry: 0,
    
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }
  
  hydrateStateWithLocalStorage() {
    let storedNames = JSON.parse(localStorage.getItem("addressBook"));
    this.setState({addressBook: storedNames});
  }


  
  addEntryHandler = () => {
    let newAddressBook = [...this.state.addressBook];
    let newEntry = {
      first: this.state.first,
      last: this.state.last,
      phone: this.state.phone,
      mobile: this.state.mobile,
      work: this.state.work,
      email: this.state.email,
      
    }
    newAddressBook.push(newEntry);
    this.setState({
      addressBook: newAddressBook,

    })    
    localStorage.setItem("addressBook", JSON.stringify(newAddressBook));
  }

  handleUpdateEntry = (entry) => {
    let newAddressBook = [...this.state.addressBook];
    newAddressBook[this.state.selectedEntry] = entry;
    this.setState({ addressBook: newAddressBook });
    localStorage.setItem("addressBook", JSON.stringify(newAddressBook));
    
  }

  addButtonHandler = () => {
    this.setState({newEntryFormDisplayed: true})
  }

  onFieldChangedHandler = (event) => {
    // Get the event name (which matches state key), and set the value.
    this.setState({ [event.target.name]: event.target.value })
    
  }

  handleDisplayDetails= (i) => {
    console.log(i)
    this.setState({
      newEntryFormDisplayed: false,
      selectedEntry: i
    })
    // DetailsDisplay.handleChangedName(this.state.addressBook[i]);
  }

  handleDetailsDeleteClick = () => {
    console.log("Deleted!");
    let newAddressBook = [...this.state.addressBook];
    newAddressBook.splice(this.state.selectedEntry, 1);
    
      this.setState({
        addressBook: newAddressBook,
        selectedEntry: 0
      })
    localStorage.setItem("addressBook", JSON.stringify(newAddressBook));
  }

  render() {
    let secondaryDisplay = null;
    if(this.state.newEntryFormDisplayed ){
      secondaryDisplay = (
        <NewEntryForm
          added={this.addEntryHandler}
          changed={this.onFieldChangedHandler}
        />
      )
    } else if (this.state.addressBook.length > 0) {
        secondaryDisplay = (
          <DetailsDisplay
            updated={(entry) => this.handleUpdateEntry(entry)} 
            changed={this.onFieldChangedHandler}
            handleDelete={() => this.handleDetailsDeleteClick()}
            displayedSingleEntry={this.state.addressBook[this.state.selectedEntry]}
          />
        )
    } else {
      secondaryDisplay =(
        <DetailsDisplay           
          displayedSingleEntry={
            {
              first: "",
              last: "Please select an entry or add a new one.",
              phone: "",
              mobile: "",
              work: "",
              email: "",
            }
          }
        />
      )
    } 

    return (
      <>
        <main className={classes.DirectoryDisplay}>
          <h3 className={classes.Title}>REACT-0-DEX &#160;&#160;&#160; i7200</h3>
          <MainDisplay 
            displayedAddresses={this.state.addressBook}
            handleDisplayDetails={(i) => this.handleDisplayDetails(i)}  
          />
          <button className={classes.button} type="button" onClick={this.addButtonHandler}>Create</button>
          { secondaryDisplay }        
        </main>
      </> 
    )
  }
}

export default ReactODexDirectory;