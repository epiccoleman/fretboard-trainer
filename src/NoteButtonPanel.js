import React from 'react';

const NoteButtonPanel = (props) => {
  return (
    <div>
        <button onClick={() => {props.callback("C")}}>C</button>
        <button onClick={() => {props.callback("C#/Db")}}>C#/Db</button>
        <button onClick={() => {props.callback("D")}}>D</button>
        <button onClick={() => {props.callback("D#/Eb")}}>D#/Eb</button>
        <button onClick={() => {props.callback("E")}}>E</button>
        <button onClick={() => {props.callback("F")}}>F</button>
        <button onClick={() => {props.callback("F#/Gb")}}>F#/Gb</button>
        <button onClick={() => {props.callback("G")}}>G</button>
        <button onClick={() => {props.callback("G#/Ab")}}>G#/Ab</button>
        <button onClick={() => {props.callback("A")}}>A</button>
        <button onClick={() => {props.callback("A#/Bb")}}>A#/Bb</button>
        <button onClick={() => {props.callback("B")}}>B</button>
    </div>
  );
}

export default NoteButtonPanel;
