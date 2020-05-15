let obj = {1: "2", '3': {stuff: "things"}};

let obj2 = {...obj};

obj['stuff'] = true;
obj2['things'] = false;

console.log(obj2);

obj2[3][1] = 2;

console.log(obj);