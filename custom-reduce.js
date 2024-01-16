function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        if (accumulator === undefined && i === 0) {
            accumulator = array[i];
        } else {
            accumulator = reducer(accumulator, array[i], i, array);
        }
    }

    return accumulator;
}

module.exports = customReduce;