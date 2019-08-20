import React from 'react';
import NoteButtonPanel from './NoteButtonPanel';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<NoteButtonPanel/>);
    expect(wrapper).toMatchSnapshot();
});