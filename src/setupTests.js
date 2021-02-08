// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

const originalFetch = global.fetch;

beforeAll(() => {
  const promise = () => new Promise(() => {});
  global.fetch = promise;
});

afterAll(() => {
  global.fetch = originalFetch;
});
