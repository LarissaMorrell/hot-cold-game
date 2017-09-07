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
      message:""
    }
  }

  //generate a whole number between 1 and 100 inclusive
  generateRandom(){
    var random = Math.random() * 100 + 1;
    console.log("The random number is ", Math.floor(random));
    return Math.floor(random);
  }

  setGuesses(newGuess){
    let guesses = [...this.state.guesses];
    guesses.push(newGuess);
    this.setState({
      guesses: guesses,
      message: ""
    });
  }

  setMessage(message){
    this.setState({
      message: message
    });
  }

  newGame(){
    this.setState({
      guesses: [],
      randomNum: this.generateRandom()
    });
  }

  render(){
    let guesses = this.state.guesses;
    return (
      <div className='game'>
        <Feedback randomNum={this.state.randomNum} guess={guesses[guesses.length-1]} message={this.state.message}  />
        <GuessForm guesses={guesses}  onSubmitGuess={val => this.setGuesses(val)} setMessage={message => this.setMessage(message)}  />
        <p className="guess-count">Guess #<span>{guesses.length}</span>!</p>
        <GuessList guesses={guesses} />
        <a onClick={e => this.newGame()} id="new-game">+ NEW GAME</a>
      </div>
    );
  }

}
