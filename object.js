function plus(num){
    this.num=num
    return num+num;
}
plus.power=4;
console.log(plus(12));
console.log(plus.power);
console.log(plus.prototype);

function createuser(username,score){
    this.username=username;
    this.score=score;
}
createuser.prototype.increment=function(){
   this.score++; 
}
createuser.prototype.printMe=function(){
    console.log(`score is: ${this.score}`) 
 }
const chai= new createuser("chai",25);
const tea= new createuser("tea",250);

chai.printMe()
tea.printMe()