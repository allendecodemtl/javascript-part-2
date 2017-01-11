function Warrior (name, gender){
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.round(Math.random()*100);
    this.fight = function(){
        console.log(this.name +" rushes to the arena with");
    };
    this.faceoff = function(opponent){
        if (this.power > opponent.power){
            console.log(this.name + " win");
        } else {
            console.log(this.name + " lose");  
        }
    };
}

var w1 = new Warrior("aa","F");
var w2 = new Warrior("bb","F");

w1.fight();
w2.fight();

w1.faceoff(w2);