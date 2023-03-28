interface Context {
    language: string;
    answer: string;
    question: string;
    date: string;
}

function getString(values: Context[]) {
    return [
        {language: 'en', answer: 'Yes', question: 'Do you like TypeScript?', date: '2019-01-01'},
        {language: 'en', answer: 'No', question: 'Do you like TypeScript?', date: '2019-01-01'},
        {language: 'en', answer: 'Yes', question: 'Do you like JavaScript?', date: '2019-01-01'},
        {language: 'en', answer: 'No', question: 'Do you like JavaScript?', date: '2019-01-01'},
        {language: 'en', answer: 'Yes', question: 'Do you like Python?', date: '2019-01-01'},
        {language: 'en', answer: 'No', question: 'Do you like Python?', date: '2019-01-01'},
        ];
}

//dictionary of 2 letters ISO country code and their corresponding contry
const dictionary = {
    en: 'English',
    sk: 'Slovak',
    de: 'German',
    fr: 'French',
    es: 'Spanish',
    it: 'Italian',
}


//dictionary of 2 letters ISO country code and their answer, question and date in that language
interface Dictionary2 {
    [key: string]: {
      answer: {
        yes: string;
        no: string;
      };
      question: {
        likeTypeScript: string;
        likeJavaScript: string;
        likePython: string;
      };
      date: {
        today: string;
        name: string;
      };
    };
    
    en: {
      answer: {
        yes: string;
        no: string;
      };
      question: {
        likeTypeScript: string;
        likeJavaScript: string;
        likePython: string;
      };
      date: {
        today: string;
        name: string;
      };
    };
    
    sk: {
      answer: {
        yes: string;
        no: string;
      };
      question: {
        likeTypeScript: string;
        likeJavaScript: string;
        likePython: string;
      };
      date: {
        today: string;
        name: string;
      };
    };
  }
  
  const dictionary2: Dictionary2 = {
    en: {
      answer: {
        yes: 'Yes',
        no: 'No',
      },
      question: {
        likeTypeScript: 'Do you like TypeScript?',
        likeJavaScript: 'Do you like JavaScript?',
        likePython: 'Do you like Python?',
      },
      date: {
        today: '2019-01-01',
        name: 'Date'
      },
    },
    sk: {
      answer: {
        yes: 'Áno',
        no: 'Nie',
      },
      question: {
        likeTypeScript: 'Máte radi TypeScript?',
        likeJavaScript: 'Máte radi JavaScript?',
        likePython: 'Máte radi Python?',
      },
      date: {
        today: '2019-01-01',
        name: 'Dátum'
      },
    },
  };

  //getmethod to get the answer, question and date in the language of the country
    function getAnswer(language: string) {
        return dictionary2[language].answer;
    }

    function getQuestion(language: string) {
        return dictionary2[language].question;
    }

    function getDate(language: string) {
        return dictionary2[language].date;
    }

//get the answer, question and date in the language of the country
const odpoved = getAnswer('sk');
const otazka = getQuestion('sk');
const datum = getDate('sk');
const answer = getAnswer('en');
const question = getQuestion('en');
const date = getDate('en');

console.log(odpoved);
console.log(otazka);
console.log(datum);
console.log(answer);
console.log(question);
console.log(date);
