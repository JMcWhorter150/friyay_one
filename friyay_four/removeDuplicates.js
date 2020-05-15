function removeDuplicates(arr) {
    // setup
    const newArr = [];

    // do work (remove duplicates)
    arr.forEach(function (item) {
        if(newArr.indexOf(item) === -1) {
            newArr.push(item);
        }
    })

    // return the completed work
    return newArr;
}

// OR

function removeDuplicates2(arr) {
    const arrObj = {}
    const newArr = [];
    arr.forEach(function (item) {
        if (!arrObj[item]) {
            newArr.push(item);
        } else {
            arrObj[item] = true;
        }
    })
    return newArr;
}

// console.log(removeDuplicates([1,2,3,4,4,4,5,6,6,7]));
console.log(removeDuplicates2([1, 2, 3, 4, 4, 4, 5, 6, 6, 7]));