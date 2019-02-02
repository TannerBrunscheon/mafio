var Roll = require('roll'),


export default class Mobster {
    brains = 8;
    brawn = 8;
    charm = 8;
    guts = 8;
    wit =8;
    name;
    archetype;
    friends = []
    rivals = []
    roll = new Roll();
    alive=1;
    

    constructor(brains,brawn,charm,guts,wit,name,archetype) {
        this.brains =   brains
        this.brawn = brawn
        this.charm = charm
        this.guts = guts
        this.wit = wit
        this.name = name
        this.archetype = archetype;
    }
    constructor(name){
        this.brains =   this.roll('3d6')
        this.brawn = this.roll('3d6')
        this.charm = this.roll('3d6')
        this.guts = this.roll('3d6')
        this.wit = this.roll('3d6')
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