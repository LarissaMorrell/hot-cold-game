import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component{

  render(){

    return (
      <form className="guess-form" onSubmit={e => e.preventDefault()}>

        <input type="text" id="newGuess" name="newGuess"
          ref={input => this.guessInput = input }
          placeholder="Enter your guess here" />

        <input type="submit" value="Guess"
          onClick={ () => this.props.onSubmitGuess(
            this.guessInput.value
          )} />
      </form>
    );
  }
}
