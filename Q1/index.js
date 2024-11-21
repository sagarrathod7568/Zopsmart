function sum(a){
    let total=a;
    function innerFun(b){
        if(b===undefined){
            return total;
        }
        total+=b;
        return innerFun;
    }
    return innerFun;
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(3)(7)());
