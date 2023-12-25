// const user={
//   username:"hitesh",
//   loginCount:8,
//   signedIn:true,
//   getUserDetails:function(){
//     console.log("Got userDetls form dataBase");
//     console.log(`UserName:${this.username}`);
//   }

// }
// console.log(user.username)
// console.log(user.getUserDetails());

function User(userName,loginCount,isLoggedIn){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;

}

const userOne=User("hitesh",12,true);
console.log(userOne);