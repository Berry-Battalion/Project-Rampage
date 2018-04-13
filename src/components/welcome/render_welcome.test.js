import React from 'react';
import Welcome from './welcome';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';

describe('<Welcome />', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <StaticRouter context={{}}>
                <Welcome />
            </StaticRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
})