import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component{

  validInput(input){
    if(input >= 1 || input <= 100){
      return true;
    }

    return false;
  }



  render(){

    return (
      <form className="guess-form" onSubmit={e => e.preventDefault()}>

        <input type="text" id="newGuess" name="newGuess"
          ref={input => //{
              // if(validInput(input)){
                this.guessInput = input
            //   }
            // }
          }
          placeholder="Enter your guess here" />

        <input type="submit" value="Guess"
          onClick={ () => this.props.onSubmitGuess(
            this.guessInput.value
          )} />
      </form>
    );
  }
}
