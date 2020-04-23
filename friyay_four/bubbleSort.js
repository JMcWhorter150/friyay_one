
function bubbleSort(arr) {
    // work through array and if number greater, swap
    for (let i=0; i<arr.length; i++) {
        // have to go through array multiple times
        for (let j=1;j<arr.length; j++) {
            let current = arr[j];
            let previous = arr[j-1];
            // if current number is greater, do nothing
            if (current > previous) {
                continue;
            } else {
                // if prev greater, swap current with previous
                let temp = current;
                current = previous;
                previous = temp;
                // fancy version es6+
                // [current, previous] = [previous, current]
            }
        }
    }
}