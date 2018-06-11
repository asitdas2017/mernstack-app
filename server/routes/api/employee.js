const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const keys = require('../../../config/keys');
const passport = require('passport');

// Load Employee Input Validation
const validateEmployeeInput = require('../../validation/employee');

// Load or import Employee model into this router
const Employee = require('../../models/Employee');

// Test API
router.get('/test', (req, res) => res.json({msg: 'Employee works!'}));


// Post Employee records for adding employee list
//--------------------------------------------------------
router.post('/addemployee', (req, res) => {
    const { errors, isValid } = validateEmployeeInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const newEmployee = new Employee({
        fname: req.body.fname,
        lname: req.body.lname,
        company: req.body.company,
        role: req.body.role
    });
    newEmployee
        .save()
        .then(employee => res.json(employee))
        .catch(err => console.log(err))
})


// All Employee records list
//--------------------------------------------------------
router.get('/employeelist', (req, res) => {
    const errors = {};
    
    Employee.find()
        .then(employees => {
            if (!employees) {
                errors.noemployee = 'There are no employees';
                return res.status(404).json(errors);
            }
            res.json(employees);
        })
        .catch(err => res.status(404).json({ employee: 'There are no profiles' }));
})

module.exports = router;