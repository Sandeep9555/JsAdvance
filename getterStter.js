class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

   get email(){
    return this._email.toUpperCase();
   }
   set email(value){
    this._email=value;
   }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
       this._password=value.toUpperCase();
    }
}

const hitesh= new User("sandeep@gmail.com","123");
console.log(hitesh.password);

const hitesh1= new User("sandeep@gmail.com","ABC");
console.log(hitesh1.email);