function myFunction(obj) {
    let res = undefined;
    
    if(obj.a != null){
        const obja = obj.a;
        if (obja.b != null) {
            res = obja.b;
        }
    }
    return res;
    
}



console.log(myFunction({a:1}));
console.log(myFunction({a:{b:{c:3}}}));
console.log(myFunction({b:{a:1}}));
console.log(myFunction({a:{b:2}}));