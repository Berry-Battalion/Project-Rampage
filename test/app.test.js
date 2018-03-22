import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/app';

Enzyme.configure({ adapter: new Adapter()});

describe('<App />', () => {
    test('shows text "Hi from App"', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('div').text()).toBe('Hi from App');
    })
})
