export class Team {
    constructor(){
        this.members = new Set();
    }

    add(character) {
        if(!this.members.has(character)){
            this.members.add(character);
        } else {throw new Error('Team already has this character')}
    }

    addAll(...characterList){
        for (let character of characterList){
            this.members.add(character);
        }
    }

    toArray(){
        this.members = Array.from(this.members);
    }
}
