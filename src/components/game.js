import React from 'react';
import Feedback from './feedback';
import GamePlay from './gamePlay';
import GuessList from './guessList';


export default class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      guesses: [],
      prevGuess: undefined
    }
    this.setGuesses = this.setGuesses.bind(this);
  }

  setGuesses(newGuess){

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
        <GamePlay onSubmit={val => this.setGuesses(val)}
                  guessNum={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }

}
