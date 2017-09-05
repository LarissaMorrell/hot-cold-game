import React from 'react';

export default function GamePlay(props){

  return (
    <form onSubmit={e => e.preventDefault()}>

      <input type="text" id="newGuess" name="newGuess"
        placeholder="Enter your guess here" />

      <input type="submit" value="Guess"
        onSubmit={ e => props.onSubmit(
          document.getElementById('newGuess').value
        )} />
    </form>
  );
}
