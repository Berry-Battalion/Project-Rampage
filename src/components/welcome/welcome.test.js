import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './welcome';

describe('<Welcome />', () => {
    test('shows text "Welcome!"', () => {
        const wrapper = shallow(<Welcome />);

        expect(wrapper.find('div').at(0).text()).toBe('Welcome!');
    })
})
