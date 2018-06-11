const Validator = require('validator');
const isEmpty = require('./isempty');

module.exports = function validateEmployeeInput(data){
    let errors = {};
    data.fname = !isEmpty(data.fname) ? data.fname : '';
    data.lname = !isEmpty(data.lname) ? data.lname : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.role = !isEmpty(data.role) ? data.role : '';

    if(!Validator.isLength(data.fname, {min: 3, max: 30})){
        errors.fname = 'First name length within 3 to 30';
    }
    if(Validator.isEmpty(data.fname)) {
        errors.fname = 'First name field is required';
    }

    if(!Validator.isLength(data.lname, {min: 3, max: 30})){
        errors.lname = 'Last name length within 3 to 30';
    }
    if(Validator.isEmpty(data.lname)) {
        errors.lname = 'Last name field is required';
    }
    
    if(Validator.isEmpty(data.company)) {
        errors.company = 'Please select any Company name from the list';
    }
    
    if(Validator.isEmpty(data.role)) {
        errors.role = 'Job/Role field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}