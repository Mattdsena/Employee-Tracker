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