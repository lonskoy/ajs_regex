import Validator from '../app.js';

test('Test Vslidator -true', () => {
  const newNik1 = new Validator('Robin_1');
  expect(newNik1).toBe(true);
});

test('Test Vslidator -false', () => {
  const newNik1 = new Validator('Робин_1');
  expect(newNik1).toBe(false);
});

