const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 10, 'Test@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('getName() returns same name', () => {
    const employee = new Employee('Dave', 10, 'Test@gmail.com');
    expect(employee.getName()).toBe('Dave');
})

test('getId() returns same id', () => {
    const employee = new Employee('Dave', 10, 'Test@gmail.com');
    expect(employee.getId()).toBe(10);
})

test('getEmail() returns same email', () => {
    const employee = new Employee('Dave', 10, 'Test@gmail.com');
    expect(employee.getEmail()).toBe('Test@gmail.com');
})

test('getRole() returns "Employee"', () => {
    const employee = new Employee('Dave', 10, 'Test@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})