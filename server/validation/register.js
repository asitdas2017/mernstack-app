const Validator = require('validator');
const isEmpty = require('./isempty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    if(!Validator.isLength(data.name, {min: 3, max: 30})){
        errors.name = 'Name length within 3 to 30';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}