const Manager = require('../lib/Manager');

test('create Manager Object', () => {
    const manager = new Manager('Dave', 10, 'Test@gmail.com', 1919);
    expect(manager.officeNumber).toBe(1919);
})

test('getRole() method returns correctly overwritten role', () => {
    const manager = new Manager('Dave', 10, 'Test@gmail.com', 1919);
    expect(manager.getRole()).toBe('Manager');
})