// Named function returning an array of strings
function getNames(): string[] {
    return ['Peter', 'Jozef', 'Marek'];
}

// Arrow function returning an array of numbers
const getNumbers = (): number[] => [1, 2, 3];

//create array of numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//create array of strings with 5 german cities
const germanCities: string[] = ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt'];

//create array of strings with 5 slovak cities
const slovakCities: string[] = ['Bratislava', 'Košice', 'Prešov', 'Nitra', 'Banská Bystrica'];


const Months = {'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11};
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mesiace = {'Jan': 'Január', 'Feb': 'Február', 'Mar': 'Marec', 'Apr': 'Apríl', 'May': 'Máj', 'Jun': 'Jún', 'Jul': 'Júl', 'Aug': 'August', 'Sep': 'September', 'Oct': 'Október', 'Nov': 'November', 'Dec': 'December'};
const mesiac = {'Jan': 'Január', 'Feb': 'Február', 'Mar': 'Marec', 'Apr': 'Apríl', 'May': 'Máj', 'Jun': 'Jún', 'Jul': 'Júl', 'Aug': 'August', 'Sep': 'September', 'Oct': 'Október', 'Nov': 'November', 'Dec': 'December'};
const mesiaceSlovensky = {'Jan': 'Január', 'Feb': 'Február', 'Mar': 'Marec', 'Apr': 'Apríl', 'May': 'Máj', 'Jun': 'Jún', 'Jul': 'Júl', 'Aug': 'August', 'Sep': 'September', 'Oct': 'Október', 'Nov': 'November', 'Dec': 'December'};
const mesiacSlovensky = {'Jan': 'Január', 'Feb': 'Február', 'Mar': 'Marec', 'Apr': 'Apríl', 'May': 'Máj', 'Jun': 'Jún', 'Jul': 'Júl', 'Aug': 'August', 'Sep': 'September', 'Oct': 'Október', 'Nov': 'November', 'Dec': 'December'};

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekDaysSlovak = ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'];
const weekDaysGerman = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

// const activeItems = items.filter(item => item.active === true)


// async function getItems() {
//     const response = await fetch('http://localhost:3000/items');
//     const items = await response.json();
//     return items;
// }