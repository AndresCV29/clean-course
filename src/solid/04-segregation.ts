interface Bird {
    eat(): void;
}

interface FliyingBird {
    
    fly(): number;
}

interface RunningBird {
    
    run(): void;
}

interface SwimmingBird {
    
    swim(): void;
}

class Tucan implements Bird, FliyingBird{
    public fly(){return 100}
    public eat(){}
}

class Hummingbird implements Bird, FliyingBird{
    public fly(){return 200}
    public eat(){}
}
class Ostrich implements Bird, RunningBird{
    public eat(){}
    public run(){}
}
class Penguin implements Bird, SwimmingBird{
    public eat(){}
    public swim(){}
}
