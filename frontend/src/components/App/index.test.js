import React from 'react';
import App from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import { act, isElement, isElementOfType, renderIntoDocument } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

it('Renders without crashing', () => {
  act(() => {
    renderIntoDocument(<Router><App /></Router>)
  })
  expect(isElement(<App />)).toBe(true)
  expect(isElementOfType(<App />, App)).toBe(true)
})

it('Snapshot matches', async () => {
  const { container } = render(<Router><App /></Router>)
  expect(container).toMatchSnapshot
})