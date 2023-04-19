"use strict";
//create mock 10 persons
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
if (person.address.country === 'Slovakia' && person.address.city === 'Bratislava') {
    console.log('Peter lives in Bratislava');
}
if (!person.isMarried && person.children.length === 0) {
    console.log('Peter is not married and has no children');
}
