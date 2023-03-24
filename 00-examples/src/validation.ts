const world = 'wor   ld';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
} 

console.log(hello());// Hello world!

// validate function phone number
export function validatePhoneNumber(phoneNumber: string): boolean {
  return /^\d{10}$/.test(phoneNumber);
}
console.log(validatePhoneNumber('1234567890'));// true

// validate function email
export function validateEmail(email: string): boolean {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
}

console.log(validateEmail('peter.petrus@pabk.sk'));// true

// validate function password
export function validatePassword(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}

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


