(() =>{
    type Gender = 'M' | 'F';
    class Person {

        constructor(
            public name: string,
            public gender: string,
            public birthdate: Date
        ){}

    }
    const newPerson = new Person('Fernado', 'M', new Date (1895-10-21));
    console.log({newPerson});
})()