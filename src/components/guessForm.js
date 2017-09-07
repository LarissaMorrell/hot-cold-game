import React from 'react';

export default class GuessForm extends React.Component{





  submitInput(value){
    if(this.checkValidInput(value)){
      this.props.onSubmitGuess(value);
    };
  }

  checkValidInput(newGuess){
    let guesses = this.state.guesses;

    //the user didn't input anything
    if(newGuess.length < 1){
      return false;
    }
    if(newGuess % 1 !== 0){
      this.setState({invalidInput: 'please input a number'});
      return false;
    }
    if(newGuess < 0 || newGuess > 101){
      this.setState({invalidInput: 'please choose a number between zero and 100'});
      return false;
    }
    if(guesses.length > 0){
      if(guesses.includes(newGuess)){
        this.setState({invalidInput: 'You guessed this number already'});
        return false;
      }
    }
    return true;
  }





  render(){

    return (
      <form className="guess-form" onSubmit={e => e.preventDefault()}>

        <input type="text" id="newGuess" name="newGuess"
          ref={input => this.guessInput = input }
          placeholder="Enter your Guess" required/>

        <input type="submit" value="Guess"
          onClick={ () => this.submitInput(
              this.guessInput.value
          )} />
      </form>
    );
  }
}
