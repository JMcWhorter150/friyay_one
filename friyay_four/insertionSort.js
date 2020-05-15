function insertionSort (inputArr) {
    let length = inputArr.length;
    // work through array
    for (let i = 1; i < length; i++) { // start at 1 because the first element is technically already sorted
        // key is current item in array we are trying to insert into sorted portion
        let valToSort = inputArr[i];
        let lastIndexOfSortedPortion = i - 1;
        // finds the first item in sorted portion of array that's less than key
        while (lastIndexOfSortedPortion >= 0 && inputArr[lastIndexOfSortedPortion] > valToSort) {
            // shifts array one to the right until you find correct place
            inputArr[lastIndexOfSortedPortion + 1] = inputArr[lastIndexOfSortedPortion];
            lastIndexOfSortedPortion -= 1;
        }
        // inserts valToSort into sorted portion in correct position
        inputArr[lastIndexOfSortedPortion + 1] = valToSort;
    }
    return inputArr;
};