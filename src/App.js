import React from 'react';
import './App.css';
import FretboardDisplay from './FretboardDisplay';
import NoteButtonPanel from './NoteButtonPanel';

const FRETBOARD = [
  ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E"],
  ["B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"],
  ["G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G"],
  ["D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D"],
  ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A"],
  ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E"]
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: this.randomNote()
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  randomNote = () => {
    let string = this.getRandomInt(1, 7);
    let fret = this.getRandomInt(0, 13);
    let note = FRETBOARD[string - 1][fret];
    return {
      string: string,
      fret: fret,
      note: note
    };
  }

  resetNote = () => { 
    this.updateCurrentNote(this.randomNote());
  }

  updateCurrentNote = (note) => {
    this.setState({
      currentNote: note
    });
  }

  receiveGuess = (note) => {
    let correctGuess = note === this.state.currentNote.note;
    let guessState = correctGuess ? "correct" : "incorrect"
    this.setState({
      guessState: guessState
    });
    if (correctGuess) this.resetNote();
  }

  render = () => {
    return (
      <>
        <header className="app-header">
          Fretboard Trainer
        </header>
        <FretboardDisplay string={this.state.currentNote.string} fret={this.state.currentNote.fret} note={this.state.currentNote.note} />
        <NoteButtonPanel callback={this.receiveGuess} />
        <div className="guessDisplay" >{this.state.guessState}</div>
      </>
    );
  }
}
