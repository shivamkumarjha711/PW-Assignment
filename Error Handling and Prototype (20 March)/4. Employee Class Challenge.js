class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    };

    getSalary () {
        return this.salary;
    };
};

let employee = new Employee('Satyam', 'Team Leader', 100000);

console.log(employee.getSalary());