function insertionSort (inputArr) {
    let length = inputArr.length;
    // work through array
    for (let i = 1; i < length; i++) {
        // key is current item in array we are trying to insert into sorted portion
        let key = inputArr[i];
        // j is last index in sorted portion
        let j = i - 1;
        // finds the first item in sorted portion of array that's less than key
        while (j >= 0 && inputArr[j] > key) {
            // shifts array one to the right until you find correct place
            inputArr[j + 1] = inputArr[j];
            j -= 1;
        }
        // inserts key into sorted portion in correct position
        inputArr[j + 1] = key;
    }
    return inputArr;
};