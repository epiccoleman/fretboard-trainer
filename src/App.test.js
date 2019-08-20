import React from 'react';

import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
});

it('displays correct when the guess is correct', () => {
  const wrapper =  shallow(<App/>);
  const note = { string: 1, fret: 10, note: "D"};
  wrapper.instance().updateCurrentNote(note);
  wrapper.instance().receiveGuess("D");

  expect(wrapper.find('.guessDisplay').text()).toBe("correct")
});

it('sets guessState to correct when the guess is correct', () => {
  const wrapper =  shallow(<App/>);
  const note = { string: 1, fret: 10, note: "D"};
  wrapper.instance().updateCurrentNote(note);
  wrapper.instance().receiveGuess("D");

  expect(wrapper.instance().state.guessState).toBe("correct")
});

it('displays incorrect when the guess is incorrect', () => {
  const wrapper =  shallow(<App/>);
  const note = { string: 1, fret: 10, note: "D"};
  wrapper.instance().updateCurrentNote(note);
  wrapper.instance().receiveGuess("C");

  expect(wrapper.find('.guessDisplay').text()).toBe("incorrect")
});

it('sets guessState to incorrect when the guess is incorrect', () => {
  const wrapper =  shallow(<App/>);
  const note = { string: 1, fret: 10, note: "D"};
  wrapper.instance().updateCurrentNote(note);
  wrapper.instance().receiveGuess("C");

  expect(wrapper.instance().state.guessState).toBe("incorrect")
});