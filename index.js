function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function NamedFunction(nameoffunction){
        return nameoffunction;
    }
}

function returnsAnAnonymousFunction(){
    return function(nameoffunction){
        return nameoffunction;
    }
}


