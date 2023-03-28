interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        country: string;
    };
    datebirth: Date;
    hobbies: string[];
    isMarried: boolean;
    children: Person[];
}
