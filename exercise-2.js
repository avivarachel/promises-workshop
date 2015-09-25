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

delay(500).then(function(){
    
    
    return getFirstChar("Alphabet");
    
   
}).then (console.log);



function getLastChar(string){
    
        return new Promise(function(resolve, reject) {
            resolve(string.charAt(string.length - 1))
            
    });
}

delay(500).then(function(){
    
    
    return getLastChar("Alphabet");
    
   
}).then (console.log);

//

function getFirstAndLastCharSeq(string) {
    var firstChar;
   return getFirstChar(string).then(
        function(_firstChar) {
            firstChar = _firstChar;
            return getLastChar(string);
        }
    ).then(
        function(lastChar) {
            return firstChar + lastChar
        }
        );
}

getFirstAndLastCharSeq("Hello").then (
    function(firstLast) {
        console.log(firstLast);
    }
    );
    
//

function getFirstAndLastCharParallel(string) {
    var firstCharPromise = getFirstChar(string);
    var lastCharPromise = getLastChar(string);
    return Promise.join(firstCharPromise, lastCharPromise, function(firstChar, lastChar) {
        return firstChar + lastChar;
        
    });
}

getFirstAndLastCharParallel("Hello").then(
    function(firstLast) {
        console.log(firstLast);
    }
    );

 
