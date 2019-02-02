export default class Family{
don;
    underBoss;
    caporegimie = {

    };
    soldiers

    constructor(don){
        this.don = don;
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