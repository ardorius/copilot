function getArr(): string[] {
     return [1, 2, 3];
  }
  

  interface Person {
    name: string;
    age: number;
    country: string;
    city: string;
  }
  
  function getObj3(): Person {
    return { name: 100, age: 30, country: 'Chile', city: 'Santiago' };
  }