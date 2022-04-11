const Intern = require('../lib/Intern');

test('Should create an Intern object', () => {
    const intern = new Intern('Dave', 10, 'Test@gmail.com', 'T-University');

    expect(intern.school).toBe('T-University');
})

test('getSchool() method should return what is assigned to this.school', () => {
    const intern = new Intern('Dave', 10, 'Test@gmail.com', 'T-University');

    expect(intern.getSchool()).toBe('T-University');
})

test('getRole() method should return overwritten role of "Intern"', () => {
    const intern = new Intern('Dave', 10, 'Test@gmail.com', 'T-University');

    expect(intern.getRole()).toBe('Intern');
})
