import React from 'react';
import Feedback from './feedback';
import GuessForm from './guessForm';
import GuessList from './guessList';
import './game.css';

export default class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      guesses: [],
      randomNum: this.generateRandom(),
      invalidInput: ""
    }
  }

  //generate a whole number between 1 and 100 inclusive
  generateRandom(){
    var random = Math.random() * 100 + 1;
    console.log("The random number is ", Math.floor(random));
    return Math.floor(random);
  }


  setGuesses(newGuess){
    let guesses = this.state.guesses;
    if(!this.checkValidInput(newGuess)){
      //the input isn't valid so exit here
      return;
    };

    guesses.push(newGuess);
    this.setState({
      guesses: guesses,
      invalidInput: ""
    });
  }


  newGame(){
    this.setState({
      guesses: [],
      randomNum: this.generateRandom()
    });
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
    let guesses = this.state.guesses;
    return (
      <div className='game'>
        <Feedback randomNum={this.state.randomNum} guess={guesses[guesses.length-1]} invalidInput={this.state.invalidInput}/>
        <GuessForm onSubmitGuess={val => this.setGuesses(val)} />
        <p className="guess-count">Guess #<span>{guesses.length}</span>!</p>
        <GuessList guesses={guesses} />
        <a onClick={e => this.newGame()} id="new-game">+ NEW GAME</a>
      </div>
    );
  }

}
