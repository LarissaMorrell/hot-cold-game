import React from 'react';
import Feedback from './feedback';
import GuessForm from './guessForm';
import GuessList from './guessList';
import './game.css';

export default class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      guesses: [4, 6, 20],
      prevGuess: undefined
    }
    this.setGuesses = this.setGuesses.bind(this);
  }

  setGuesses(newGuess){
    console.log("hey " + newGuess);
    let guesses = this.state.guesses;
    let prevGuess = guesses[guesses.length - 1];
    guesses.push(newGuess);

    this.setState({
      guesses: guesses,
      prevGuess: prevGuess
    });
  }

  render(){
    console.log('in Game render');
    return (
      <div className='game'>
        <Feedback userFeedback="random feedback" prevGuess={this.state.prevGuess}/>
        <GuessForm onSubmitGuess={val => this.setGuesses(val)} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }

}
