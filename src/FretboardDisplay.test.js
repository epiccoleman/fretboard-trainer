import React from 'react';
import FretboardDisplay from './FretboardDisplay';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const wrapper = shallow(<FretboardDisplay string="1" note="E" fret="0"/>);
    expect(wrapper).toMatchSnapshot();
});