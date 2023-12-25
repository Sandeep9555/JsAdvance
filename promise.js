const promiseOne=new Promise(function(resolve,reject){
              setTimeout(function(){
                console.log("Async task is completed");
                resolve();

              },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

// 

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sandeep",email:"chai@example.com"});
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promisethree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"sandeep",email:"chai@example.com"});
    },1000);
})

promisethree.then(function(user){
    console.log(user);
})

const promisefive=new Promise(function(resolve,reject){
   let error=true;
    setTimeout(() => {
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('Error:Js went Wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response=await promisefive
        console.log(response);

    } catch(error){
        console.log(error);
    }
}

consumePromiseFive();
fetch('https://api.github.com/users/hiteshchoudhary').then