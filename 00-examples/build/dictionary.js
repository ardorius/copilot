"use strict";
//dictionary of 2 letters ISO country code and their corresponding contry
const countryCodes = {
    'cz': 'Czech Republic',
    'sk': 'Slovakia',
    'de': 'Germany',
    'us': 'United States',
    'gb': 'United Kingdom',
    'fr': 'France',
    'es': 'Spain',
};
//dictionary of 2 letters ISO country code and their answer, question and date in that language
const countryCodes2 = {
    'sk': {
        'answer': 'odpoved',
        'question': 'otazka',
        'date': 'datum',
    },
    'cz': {
        'answer': 'odpoved',
        'question': 'otazka',
        'date': 'datum',
    },
    'de': {
        'answer': 'antwort',
        'question': 'frage',
        'date': 'datum',
    },
    'ch': {
        'answer': 'antwort',
        'question': 'frage',
        'date': 'datum',
    }
};
//test countryCodes
console.log(countryCodes['cz']);
//test countryCodes2
console.log(countryCodes2['ch']['answer']);
