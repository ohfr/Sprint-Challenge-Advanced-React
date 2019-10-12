import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);


test('Renders Display Component', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByRole(/display/i)
  expect(element).toBeVisible();
})

test('Render Dark Mode Switch', () => {
  const wrapper = rtl.render(<App />);
  const element  = wrapper.getByRole(/nav/i);
  expect(element).toBeVisible();
})

