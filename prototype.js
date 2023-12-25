let myName="Sandeep";
console.log(myName.truelength)


let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spidermanman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log("Hiteshis in all object");
}
heroPower.hitesh()

const teacher={
    
    makeVideo:true
}
const TeachingSupport={
    isAvailiable:false,
}

 const user={
    name:"chai",
    email:"sandeep112@gmail.com"
 }
const TASupport={
    makeAssignment:"JS Assignment",
    fulltime:true,

    __proto__:TeachingSupport,


}

Teacher.__proto=User

//modesyntax;

Object.setPrototypeOf(TeachingSupport,Teacher); 

let anotherUsername="Chaiaurcode";

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is :${this.trim().length()}`);
}

anotherUsername.truelength();
