const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employees_db"
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log("--- EMPLOYEES ---")
    mainMenu();
  });
  
  //main menu prompts
  const mainMenu = () => {
    inquirer.prompt ([
      {
        type: 'list',
        name: 'mainmenu', 
        message: 'What would you like to do?',
        choices: ['View All Departments',
                  'View All Roles',
                  'View All Employees', 
                  'Add Department',
                  'Add Role',
                  'Add Employee',
                  'Update Employee Role'             
                  ]
      }
    ]).then((answer) => {
      switch (answer.mainmenu) {
        case 'View All Departments':
          viewAllDepartments();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Employees':
          viewAllEmployees();
          break; 
        case 'Add Department':
          addDepartment();
          break;
        case 'Add Role':
          addRole();
          break;
        case 'Add Employee':
          addEmployee();
          break;
        case 'Update Employee Role':
          updateEmployeesRole();
          break;
  
      }
    });
  }

  function viewAllDepartments () {
    connection.query("SELECT * FROM employees_db.department", function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    });
}

function viewAllRoles () {
    connection.query("SELECT r.id, r.title, d.name AS department, r.salary FROM department d LEFT JOIN role r ON d.id = department_id", function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    });
  }

  function viewAllEmployees() {
    connection.query("SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS Manager FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON d.id = r.department_id LEFT JOIN employee m ON m.id = e.manager_id", function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    });
  }