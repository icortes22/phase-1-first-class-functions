const receivesAFunction = callback => callback()
function returnsANamedFunction(){
    return function rex(){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}