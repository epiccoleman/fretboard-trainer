import React from 'react';
import './App.css';

function formatForDisplay(string, fret, note){
    return `String: ${string} Fret: ${fret}\nNote: ${note}`
}

function FretboardDisplay(props) {
  return (
    <div>
        {formatForDisplay(props.string, props.fret, props.note)}
    </div>
  );
}

export default FretboardDisplay;