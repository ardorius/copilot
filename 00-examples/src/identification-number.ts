//create function for validation of input identification number
function validateIdentificationNumber(identificationNumber: string): boolean {
    return /^[0-9]{10}$/.test(identificationNumber);
}

//test
console.log("1234567890 = " + validateIdentificationNumber('1234567890')); // true
console.log("123456789 = " + validateIdentificationNumber('123456789')); // false
console.log("12345678901 = " + validateIdentificationNumber('12345678901')); // false

