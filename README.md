# My-Project-12


                                        Employee Tracker


Description

    The Employee Tracker is a command-line application built with Node.js and PostgreSQL. It allows users to manage a company’s employee database, including departments, roles, and employees. The application enables viewing, adding, and updating employees and their respective roles within the company. It offers a streamlined solution to organize and manage employee data for any business.

            Table of Contents

	        •	Installation
	        •	Usage
	        •	Features
	        •	Technologies Used
	        •	License
	        •	Contributing
	        •	Questions

Installation

	1.	Clone the repository:
            git clone https://github.com/JimiL555/My-Project-12.git

    2.	Navigate to the project directory:
            cd My-Project-12
    
    3.	Install the necessary dependencies:
            npm install

    4.	Set up PostgreSQL:
	    •	Ensure PostgreSQL is installed and running.
	    •	Create a database for the project (if not already created): createdb employee_tracker
        
        •	Run the schema and seed files to set up the database structure and seed initial data:
                psql -U postgres -d employee_tracker -f db/schema.sql
                psql -U postgres -d employee_tracker -f db/seed.sql

Usage

    1.	Run the application:
            node index.js

    2.	You will be prompted with various options to view, add, and update departments, roles, and employees:
	    •	View all departments
	    •	View all roles
	    •	View all employees
	    •	Add a department
	    •	Add a role
	    •	Add an employee
	    •	Update an employee role


	3.	Follow the on-screen prompts to manage the employee database as needed.

	4. Please see attached link for a how to video showing you how to run and use the application.
		
		•	https://youtu.be/NXvTdzD7Yls?si=bNIoYVVBzg4VH3PK
		
			![Screenshot from YouTube Video](./images/HowToVideo.jpg)

Features

        •	View departments, roles, and employees.
	    •	Add new departments, roles, and employees.
	    •	Update an employee’s role within the company.
	    •	Easy navigation through the command-line prompts.


Technologies Used

	    •	Node.js: JavaScript runtime environment for building server-side applications.
	    •	Inquirer.js: For interactive command-line prompts.
	    •	PostgreSQL: Relational database management system used to store employee data.
	    •	pg: PostgreSQL client for Node.js.


License

    This project is licensed under the MIT License. See the LICENSE file for more details.

Contributing

    Contributions are welcome! Please follow these steps to contribute:

	    1.	Fork the repository.
	    2.	Create a new branch for your feature or bug fix:
                git checkout -b your-feature-branch

        3.	Commit your changes:
                git commit -m 'Add new feature'

        4. Push to the branch:
              git push origin your-feature-branch

        5. Submit a pull request.

Questions

    If you have any questions or need further assistance, feel free to reach out:

	    •	GitHub: JimiL555

    You can copy this template into your README.md file and modify it based on your project specifics or personal preferences. Let me know if you need help with any adjustments!