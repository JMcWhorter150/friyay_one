function selectionSort(arr) {
    const len = arr.length;
    // loop through array
    for (let i=0; i<len; i++) {
        // set min as index at first position each loop
        let indexAtMin = i;
        // check rest of array (items greater than i less than length of list)
        for (let j=i+1; j<len; j++) {
            // if any number in array is less than current min, set min position to be the position for the smallest item in rest of array
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        // if min is different than i (something else is smaller than the current number)
        if (i !== min) {
            // swap!
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            // fancy es6
            // [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr;
}