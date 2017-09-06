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
      randomNum: this.generateRandom()
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

    //is the game finished?
    if(newGuess === this.state.randomNum){
      //TODO option of starting another game
      alert("You win!");
    }

    guesses.push(newGuess);

    this.setState({
      guesses: guesses
    });
  }

  render(){
    let guesses = this.state.guesses;

    return (
      <div className='game'>
        <Feedback randomNum={this.state.randomNum} guess={guesses[guesses.length-1]} />
        <GuessForm onSubmitGuess={val => this.setGuesses(val)} />
        <GuessList guesses={guesses} />
      </div>
    );
  }

}
