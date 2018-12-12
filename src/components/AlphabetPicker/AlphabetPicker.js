import React from 'react';
import classes from './AlphabetPicker.module.css'

const AlphabetPicker = (props) => {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return(
    <p className={classes.P}>
      {alphabet.map((e) => <span className={classes.Span} key={e} onClick={() => props.clicked(e)}>{e} </span>)}
    </p>
  )

}

export default AlphabetPicker;