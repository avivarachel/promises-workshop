var Promise = require("bluebird");

function delay(time){
    
        return new Promise(function(resolve) {
            setTimeout(resolve, time);
    });
}


// Above is taken from Exercise 1


function getFirstChar(string){
    
        return new Promise(function(resolve, reject) {
            resolve(string.charAt(0))
            
    });
}

delay(1000).then(function(){
    
    
    return getFirstChar("Alphabet");
    
   
}).then (console.log);

 