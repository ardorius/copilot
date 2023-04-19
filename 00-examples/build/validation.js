"use strict";
//create hello word string
const helloWorld = 'Hello World';
//remove all spaces from string
const helloWorldNoSpaces = helloWorld.replace(/\s/g, '');
//test
console.log(helloWorldNoSpaces);
// validate function phone number
function validatePhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneNumberRegex.test(phoneNumber);
}
//test
console.log("123-456-7890 = " + validatePhoneNumber('123-456-7890'));
console.log("123-456-789 = " + validatePhoneNumber('123-456-789')); //false
// validate function email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
// validate function password
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}
//describe me the regex for email
// ^                 Start anchor
// [a-zA-Z0-9._-]+   Match any alphanumeric character, underscore, dot or dash
//popis mi regex pro heslo
// ^                 Start anchor
// (?=.*[a-z])       Ensure string has at least one lowercase letter
// (?=.*[A-Z])       Ensure string has at least one uppercase letter
// (?=.*\d)          Ensure string has at least one digit
// [a-zA-Z\d]{8,}    Ensure string is at least 8 characters long
//regex for password
// ^                 Start anchor
// (?=.*[a-z])       Ensure string has at least one lowercase letter
// (?=.*[A-Z])       Ensure string has at least one uppercase letter
// (?=.*\d)          Ensure string has at least one digit
// [a-zA-Z\d]{8,}    Ensure string is at least 8 characters long
// $                 End anchor
