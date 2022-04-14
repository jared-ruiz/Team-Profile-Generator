const Engineer = require('../lib/Engineer');

test('should create an Engineer object', () => {
    const enginner = new Engineer('Dave', 10, 'Test@gmail.com','test-test');

    expect(enginner.github).toBe('test-test');
})

test('getGithub() method should return what this.github was assigned', () => {
    const enginner = new Engineer('Dave', 10, 'Test@gmail.com','test-test');

    expect(enginner.getGithub()).toBe('test-test');
})