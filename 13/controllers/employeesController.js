const data = {
    employees: require('../model/employees.json'),
    setEmployees: function (data) { this.employees = data }
}

const getAllEmployees = (req, res) => {
    res.json(data.employees);
}

const createNewEmployee = (req, res) => {
    const newEmployee = {
        id: data.employees[data.employees.length - 1].id + 1 || 1,
        // improved id line:
        // id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    if (!newEmployee.firstname || !newEmployee.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    data.setEmployees([...data.employees, newEmployee]);
    res.status(201).json(data.employees);
}

const updateEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    // if employee does not exist, send response status 400 - bad data to update
    if (!employee) {
        return res.status(400).json({ 'message': `Employee ID ${req.body.id} not found.` });
    }
    // if employee is found change the first name of the employee
    if (req.body.firstname) employee.firstname = req.body.firstname;
    // change last name
    if (req.body.lastname) employee.lastname = req.body.lastname;
    // filter the array to remove existing employee record from it
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    // add new employee to the array
    const unsortedArray = [...filteredArray, employee];
    // set employees after they've been updated
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.employees);
}

const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found.` });
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    // set employees to the filtered array
    data.setEmployees([...filteredArray]);
    res.json(data.employees);
}

const getEmployee = (req, res) => {
    // find out who the employee is
    const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
    // if the employee doesn't exist send status code 400 - bad data
    if (!employee) {
        return res.status(400).json({ 'message': `Employee ID ${req.params.id} not found.` });
    }
    // return the specific employee
    res.json(employee);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}