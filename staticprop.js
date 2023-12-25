class User{

    constructor(username){
        this.username=username
    }

    logIn(){
        console.log(`Username :${this.username}`);
    }

     static createId(){
        return `123`
    }
}

const sandeep=new User("hitesh");
//console.log(sandeep.createId())

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email
    }
}

const iphone=new Teacher("iphone","i@gmail.com");
iphone.logIn();
iphone.createId();