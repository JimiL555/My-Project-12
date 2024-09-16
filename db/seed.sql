-- Populating the department table
INSERT INTO department (name) 
VALUES 
('Engineering'),
('Sales'),
('HR');

-- Populating the role table
INSERT INTO role (title, salary, department_id) 
VALUES 
('Software Engineer', 100000, 1),
('Salesperson', 80000, 2),
('HR Manager', 90000, 3);

-- Populating the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('John', 'Doe', 1, NULL),    -- Software Engineer, no manager
('Jane', 'Smith', 2, 1),     -- Salesperson, managed by John Doe
('Alex', 'Johnson', 3, NULL); -- HR Manager, no manager