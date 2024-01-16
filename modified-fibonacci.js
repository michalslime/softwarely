function isPartOfModifiedFibonacci(first, second, checkNumber, current = second, previous = first) {
    // Base case: if the current number is equal to the checkNumber
    if (current === checkNumber) {
        return true;
    }

    // If the current number exceeds the checkNumber
    if (current > checkNumber) {
        return false;
    }

    // Recursive call with updated values
    return isPartOfModifiedFibonacci(first, second, checkNumber, current + previous, current);
}

module.exports = isPartOfModifiedFibonacci;