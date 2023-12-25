function Setusername(username){
    //complex calculations
    this.username=username
    console.log("called");
}

function createUser(username,email,passWord){
    Setusername.call(this,username)
    this.email=email
    this.passWord=passWord

}

const chai=new createUser("chai","chaifb@gmail.com","123")
console.log(chai);