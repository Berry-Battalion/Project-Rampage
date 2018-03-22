import React from 'react';
import Welcome from '../../src/components/welcome';
import renderer from 'react-test-renderer';

describe('<Welcome />', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Welcome />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
})