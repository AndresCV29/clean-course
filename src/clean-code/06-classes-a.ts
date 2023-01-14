(() =>{
    type Gender = 'M' | 'F';
    class Person {
        public name: string;
        public gender: string;
        public birthdate: Date;

        constructor(
            name: string,
            gender: string,
            birthdate: Date
        ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }
    const newPerson = new Person('Fernado', 'M', new Date (1895-10-21));
    console.log({newPerson});
})()