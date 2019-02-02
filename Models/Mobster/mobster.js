

export default class Mobster {
    name;
    archetype;
    friends = []
    rivals = []
    alive=1;

    roll() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        return randomNumber;
    }
    roll3(){
        return this.roll() +this.roll() + this.roll()
    }
    constructor(name){
        this.brains =   this.roll3()
        this.brawn = this.roll3()
        this.charm = this.roll3()
        this.guts = this.roll3()
        this.wit = this.roll3()
        this.name = name
        this.archetype = "NADA"
    }

    addRival(rival){
        this.rivals.push(rival)
    }
    addFriend(friend){
        this.friends.push(friend);
    }
    kill(){
        this.alive = 0;
    }
 
 
}