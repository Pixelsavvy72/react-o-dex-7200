import React, {Component} from 'react';
import classes from './DetailsDisplay.module.css';

class DetailsDisplay extends Component {
  state = {
    editable: false,
    first: this.props.displayedSingleEntry.first,
    last: this.props.displayedSingleEntry.last,
    phone: this.props.displayedSingleEntry.phone,
    mobile: this.props.displayedSingleEntry.mobile,
    work: this.props.displayedSingleEntry.work,
    email: this.props.displayedSingleEntry.email, 
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
     first: nextProps.displayedSingleEntry.first,
     last: nextProps.displayedSingleEntry.last,
     phone: nextProps.displayedSingleEntry.phone,
     mobile: nextProps.displayedSingleEntry.mobile,
     work: nextProps.displayedSingleEntry.work,
     email: nextProps.displayedSingleEntry.email,
    })
  
  }

  changed = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  allowUpdate = () => {
    this.setState({editable: true})
  }

  handleUpdate = () => {
    this.setState({editable: false})
    this.props.updated(this.state)
  }

  render() {
    let fieldColor;
    let textColor;
    this.state.editable ? fieldColor = '#9BBC80' : fieldColor = 'rgb(33, 44, 25)'; 
    this.state.editable ? textColor = 'rgb(33, 44, 25)' : textColor = '#9BBC80'; 
    let editOkButton;
    if(!this.state.editable) {
      editOkButton = <button className={classes.Button} type="button" onClick={this.allowUpdate}>Edit</button>
    } else {
      editOkButton = <button className={classes.Button} type="button" onClick={this.handleUpdate}>OK</button>
    }
    if(this.props.displayedSingleEntry.mobile || this.props.displayedSingleEntry.first) {
      return(
        <>
          <main className={classes.DetailsDisplayArea}>
            <p>
              <span className={classes.Name}>{this.state.first} {this.state.last}</span>
            </p> 
              <label className={classes.Label}>First: </label>
                <input className={classes.Input} style={{backgroundColor: fieldColor, color: textColor}} onChange={this.changed} value={this.state.first} name="first" disabled={!this.state.editable}></input>
              <label className={classes.Label}>Last: 
                <input className={classes.Input} style={{backgroundColor: fieldColor, color: textColor}} onChange={this.changed} value={this.state.last} name="last" disabled={!this.state.editable}></input>
              </label>
              <label className={classes.Label}>Phone: 
                <input className={classes.Input} style={{backgroundColor: fieldColor, color: textColor}} onChange={this.changed} value={this.state.phone} name="phone" disabled={!this.state.editable}></input>
              </label>
              <label className={classes.Label}>Mobile: 
                <input className={classes.Input} style={{backgroundColor: fieldColor, color: textColor}} onChange={this.changed} value={this.state.mobile} name="mobile" disabled={!this.state.editable}></input>
              </label>
              <label className={classes.Label}>Work: 
                <input className={classes.Input} style={{backgroundColor: fieldColor, color: textColor}} onChange={this.changed} value={this.state.work} name="work" disabled={!this.state.editable}></input>
              </label>
              <label className={classes.Label}>Email: 
                <input className={classes.Input} style={{backgroundColor: fieldColor, color: textColor}} onChange={this.changed} value={this.state.email} name="email" disabled={!this.state.editable}></input>
              </label>
  
            { editOkButton }
            <button className={classes.Button} type="button" onClick={this.props.handleDelete}>Delete</button>
          </main>
        </>
      )
    } else {
      return(
        <>
          <main className={classes.DetailsDisplayArea}>
            <p>
              <span className={classes.Name}>{this.props.displayedSingleEntry.first}</span>
              <span className={classes.Name}>{this.props.displayedSingleEntry.last}</span>
            </p>  
          </main>
        </>
      )
    }
  }

  
}
export default DetailsDisplay;