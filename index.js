const inquirer = require('inquirer');
const db = require('./db'); // Import your db.js file

// Start the application
function startApp() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit',
                ],
            },
        ])
        .then((answer) => {
            switch (answer.action) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log('Goodbye!');
                    process.exit();
            }
        });
}

// Function to view all departments
function viewAllDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.table(res.rows);
            startApp(); // Go back to the main menu
        }
    });
}

// Function to view all roles
function viewAllRoles() {
    db.query('SELECT * FROM role', (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.table(res.rows);
            startApp(); // Go back to the main menu
        }
    });
}

// Function to view all employees
function viewAllEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.table(res.rows);
            startApp(); // Go back to the main menu
        }
    });
}

// Function to add a department
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:',
            },
        ])
        .then((answer) => {
            db.query('INSERT INTO department (name) VALUES ($1)', [answer.name], (err, res) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Department added successfully!');
                    startApp(); // Go back to the main menu
                }
            });
        });
}

// Function to add a role
function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the name of the role:',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the role:',
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter the department ID for the role:',
            },
        ])
        .then((answers) => {
            db.query(
                'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
                [answers.title, answers.salary, answers.department_id],
                (err, res) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Role added successfully!');
                        startApp(); // Go back to the main menu
                    }
                }
            );
        });
}

// Function to add an employee
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter the first name of the employee:',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the last name of the employee:',
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the role ID for the employee:',
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the manager ID for the employee (null if none):',
            },
        ])
        .then((answers) => {
            db.query(
                'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
                [answers.first_name, answers.last_name, answers.role_id, answers.manager_id || null],
                (err, res) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Employee added successfully!');
                        startApp(); // Go back to the main menu
                    }
                }
            );
        });
}

// Function to update an employee's role
function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employee_id',
                message: 'Enter the ID of the employee you want to update:',
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the new role ID for the employee:',
            },
        ])
        .then((answers) => {
            db.query(
                'UPDATE employee SET role_id = $1 WHERE id = $2',
                [answers.role_id, answers.employee_id],
                (err, res) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Employee role updated successfully!');
                        startApp(); // Go back to the main menu
                    }
                }
            );
        });
}

// Start the application
startApp();