import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import axiosMock from 'axios';

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

// test('Axios Call', async () => {
// const wrapper = rtl.render(<App />);
// const url = 'http://localhost:5000/api/players';
// axiosMock.get.mockResolvedValueOnce({
//   data: { value: 'hello'}
// })
// fireEvent.load(wrapper);

//   const greetingNode  = await waitForElement(() => {
    
//   })
// })
