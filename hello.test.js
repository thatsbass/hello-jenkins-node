const sayHello = require('./hello');

test('should return Hello Jenkins!', () => {
  expect(sayHello()).toBe("Hello Jenkins!");
});
