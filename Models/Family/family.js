import Mobster from '../Mobster/mobster';
export default class Family{
    don;
    underBoss;
    caporegimie = {
    };
    soldiers
    constructor(name,surname){
        this.don = new Mobster(name);
        this.surname = surname;
    }
    add(mobster){
        if(!this.don){
            this.don = mobster;
            return
        }
        if(!this.underBoss){
            this.underBoss = mobster
            return
        }
        if(!this.caporegimie){
            this.caporegimie[mobster.name] = {mobster : []}
            return
        }

        leastSoldiers = 10000000;
        mobsterOf ;
        for(let key in this.caporegimie){
            

        }
    }
}