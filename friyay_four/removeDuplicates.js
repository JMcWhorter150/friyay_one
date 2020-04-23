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
    arr.forEach(function (item) {
        arrObj[item] = true;
    })
    return Object.keys(arrObj);
}