import React from 'react';
import './guessList.css';

export default function GuessList(props){

  const guesses = props.guesses.map((guess, index) =>
    <li key={index}>
      {guess}
    </li>
);

  return (
    <ul className="guess-list">
      {guesses}
    </ul>
  );
}
