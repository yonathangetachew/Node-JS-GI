const express = require('express');
const app = express();
const employees = require('./employees.json');

// Endpoint to get all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Endpoint to get a specific employee by ID
app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);
  const employee = employees.employees.find(emp => emp.employeeID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
