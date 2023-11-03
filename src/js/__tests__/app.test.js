import Validator from '../app.js';

test('Test Vslidator', () => {
  const newNik1 = new Validator('Ro123bin');
  newNik1.validateUsername();
  expect(newNik1.validateUsername()).toBe(true);
});
