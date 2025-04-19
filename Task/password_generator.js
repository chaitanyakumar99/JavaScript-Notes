
function passwordgenrator(){
    
    const char="ABCDEFGHIJKLMNPQRSTUVWXYZ"
    let password=""
        
        for(let i =0; i<2; i++){
          let data=Math.floor(Math.random()*char.length)
          password +=char[data]
        }
        console.log(password)
    }
    
    passwordgenrator()