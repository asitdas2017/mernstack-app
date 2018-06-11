const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating Schema
const EmployeeSchema = new Schema ({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
})

module.exports = Employee = mongoose.model('employee', EmployeeSchema);