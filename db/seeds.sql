USE employees_db;

INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("Processing");
INSERT into department (name) VALUES ("Accounts");
INSERT into department (name) VALUES ("Transport");

INSERT into role (title, salary, department_id) VALUES ("Sales Manager", 110000, 1);
INSERT into role (title, salary, department_id) VALUES ("Sales Rep", 60000, 1);
INSERT into role (title, salary, department_id) VALUES ("Processing Manager", 90000, 2);
INSERT into role (title, salary, department_id) VALUES ("Programmer", 60000, 2);
INSERT into role (title, salary, department_id) VALUES ("Finance Manager", 90000, 3);
INSERT into role (title, salary, department_id) VALUES ("Accounts Payable", 55000, 3);
INSERT into role (title, salary, department_id) VALUES ("Transport Manager", 80000, 4);
INSERT into role (title, salary, department_id) VALUES ("Truck Driver", 55000, 4);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jon", "Pettrey", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Sharran", "Nickson", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Mick", "Harris", 3, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Steve", "Bradshaw", 4, 3);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Merna", "Spain", 5, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Lynda", "Purvis", 6, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Luke", "Bird", 7, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Angelo", "Rossi", 8, 7);