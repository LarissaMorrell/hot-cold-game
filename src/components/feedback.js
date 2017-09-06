import React from 'react';

export default function GuessList(props){

  function evalGuess(){

    //before any guesses are made
    if(!props.guess){
      return "Guess a number from 1 to 100";
    }

    const guessDiff = Math.abs(props.randomNum - props.guess);

    if(guessDiff === 0){
      return "You Win!";
    }
    else if(guessDiff < 10){
      return "You're on fire!";
    }
    else if(guessDiff < 20){
      return "It's getting hot in here"
    }
    else if(guessDiff < 30){
      return "You're giving me that warm and fuzzy feeling"
    }
    else if(guessDiff < 40){
      return "I'm giving you the cold shoulder";
    }
    else {
      return "Are you even trying?"
    }
  }

  return (
    <p>
      {evalGuess()}
    </p>
  );
}
