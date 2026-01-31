class Human{
    age = 13; ///public
    #wt = 80; ///private
    ht = 180;

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

let obj = new Human();
console.log(obj.age)
obj.wt();