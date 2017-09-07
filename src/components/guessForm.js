import React from 'react';

export default class GuessForm extends React.Component{


  submitInput(newGuess){
    this.guessInput.value = ""
    let guesses = this.props.guesses;

    if(newGuess.length < 1){
      return
    }
    if(newGuess % 1 !== 0){
      this.props.setMessage('please input a number');
      return;
    }
    if(newGuess < 0 || newGuess > 101){
      this.props.setMessage('please choose a number between zero and 100');
      return;
    }
    if(guesses.length > 0){
      if(guesses.includes(newGuess)){
        this.props.setMessage('You guessed this number already');
        return;
      }
    }

    this.props.onSubmitGuess(newGuess);
  }



// TODO
// input clearing
// Wrapping guesses.

  render(){

    return (
      <form className="guess-form" onSubmit={e => e.preventDefault()}>

        <input type="text" id="newGuess" name="newGuess"
          ref={input => this.guessInput = input }
          placeholder="Enter your Guess" />

        <input type="submit" value="Guess"
          onClick={ () => this.submitInput(
              this.guessInput.value
          )} />
      </form>
    );
  }
}
