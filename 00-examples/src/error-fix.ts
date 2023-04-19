function getArr(): string[] {
  //fix code here
  return ['a', 'b', 'c'];
    //  return [1, 2, 3];
  }
  

  interface Person {
    name: string;
    age: number;
    country: string;
    city: string;
  }
  
  function getObj3(): Person {
    return { name: '100', age: 30, country: 'Chile', city: 'Santiago' };
  }

  //test
  console.log(getArr());
  console.log(getObj3());