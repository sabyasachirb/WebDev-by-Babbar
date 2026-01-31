class Human{
    age; ///public
    #wt = 80; ///private
    ht;
    constructor (Newage, Newht){
        this.age = Newage;
        this.ht = Newht;
    }
    walking()
    {
        console.log("I am Walking");
    }
    running(){
        console.log("I am running");
    }
    wt()
    {
        console.log(this.#wt);
    }
    get fetchWeight()
    {
        return this.#wt; //getter
    }
    set modifyWeight(val)
    {
        this.#wt = val; //setter
    }
}

let obj = new Human(50, 67);
console.log(obj.age)
obj.wt();