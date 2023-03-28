"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.validateEmail = exports.validatePhoneNumber = exports.hello = void 0;
//remove all spaces from string
const world = 'wor   ld';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
console.log(hello()); // Hello world!
// validate function phone number
function validatePhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}
exports.validatePhoneNumber = validatePhoneNumber;
console.log(validatePhoneNumber('1234567890')); // true
// validate function email
function validateEmail(email) {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
}
exports.validateEmail = validateEmail;
console.log(validateEmail('peter.xxx@pabk.sk')); // true
// validate function password
function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}
exports.validatePassword = validatePassword;
//regex for password
// ^                 # start-of-string
// (?=.*[a-z])       # a lowercase letter must occur at least once
// (?=.*[A-Z])       # an uppercase letter must occur at least once
// (?=.*\d)          # a digit must occur at least once
// [a-zA-Z\d]{8,}    # any word character (letter, number, underscore) must occur at least eight times
// $                 # end-of-string
//regex for email
// ^                 # start-of-string
// [a-z0-9._%+-]+    # a lowercase letter, a digit, an underscore, a dot, a percent, a plus, or a dash must occur at least once
// @                 # an at sign must occur once
// [a-z0-9.-]+       # a lowercase letter, a digit, a dot, or a dash must occur at least once
// \.                # a dot must occur once
// [a-z]{2,4}        # a lowercase letter must occur at least twice, but no more than four times
// $                 # end-of-string
//regex for phone number
