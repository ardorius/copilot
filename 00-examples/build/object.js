"use strict";
//create object person
const person = {
    name: 'Peter',
    age: 30,
    address: {
        street: 'Hlavna',
        city: 'Bratislava',
        country: 'Slovakia',
    },
    datebirth: new Date(1989, 1, 1),
    hobbies: ['sport', 'music'],
    isMarried: false,
    children: [],
    country: "",
    city: ""
};
console.log(!person.country ? person.country = "Slovakia" : person.country); //if person.country is empty, then person.country = "Slovakia"
console.log(person);
if (person.city === "") {
    console.log(person.city = "Bratislavax");
}
else {
    console.log(person.city);
}
