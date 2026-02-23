const { add, greet } = require('./index');

test('add function works', () => {
  expect(add(2, 3)).toBe(5);
});

test('greet function works', () => {
  expect(greet('DevOps')).toBe('Hello, DevOps!');
});
