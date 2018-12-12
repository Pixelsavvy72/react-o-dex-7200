import React, {Component} from 'react';
import classes from './NewEntryform.module.css';

class NewEntryForm extends Component {
  render() {
    return(
      <>
        <div className={classes.FormArea} id="FormArea">
          <h3 className={classes.Title}>New Entry Form</h3>
          <input className={classes.Input} onChange={this.props.changed} name="first" placeholder="First" />
          <input className={classes.Input} onChange={this.props.changed} name="last" placeholder="Last" />
          <input className={classes.Input} onChange={this.props.changed} id="phoneField" name="phone" placeholder="Phone" />
          <input className={classes.Input} onChange={this.props.changed} id="mobileField" name="mobile" placeholder="Mobile" />
          <input className={classes.Input} onChange={this.props.changed} id="workPhoneField" name="work" placeholder="Work Phone" />
          <input className={classes.Input} onChange={this.props.changed} id="mobileField" name="email" placeholder="Email" />
          <button onClick={this.props.added} className={classes.FormButton}>Save</button>
        </div>
      </>
    )
  }
}

export default NewEntryForm;