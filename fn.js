// Make this one the module for Functional Feud assignment

module.exports = {
    range: range,
    _map: _map,
    _filter: _filter,
    _reduce: _reduce,
    _all: _all,
    _some: _some,
    _find, _find,
}

//=======================================================================================

function range(min, max) {

    let nmbrs = []; // empty array

    if (typeof (min) !== 'number') {
        return null;
    } // if min isn't a number, return 'null'

    if (typeof (max) !== 'number') {
        return null;
    } // if max isn't a number, return 'null' 

    if (min > max) {
        return null;
    } // if min is greater than max the math won't work and there won't be a range
    // return 'null'

    for (let i = min; i < max + 1; i++) {
        let current = i;
        nmbrs.push(current);
    } // for loop used to push range numbers to the array. 

    return nmbrs; // once all numbers have been pushed return the array 'nmbrs'


    // Input: two numbers, Return Value: Array of Numbers
    // High-level = take an input of two numbers, run some
    // function to return an array of all the values between 
    // the smaller and larger of the two values
    /* Steps: 
        - somewhere in there going to need to push a bunch of values to 
        an empty array, in this case nmbrs. I'm thinking run some kind of loop
        from min to max.
        - 

    */
}; /* returns an array of numbers ranging from 'min' to 'max', works for all 
my test cases right now although kind of unclear on when min = max. Might come
back to that. */

// NOW WRITTEN OUT IN STEPS AND CODE

//=======================================================================================

function _map(array, func) {
    // CODE YOUR FUNCTION BASED ON THE STEPS BELOW

    /* Steps:
    1. define inputs: an arry, and a simple function to pass the array through.
    1a. Write/determine a function to pass the items in the array through. <== should go 
        in the test file.
    2b. find a way to isolate each item in the array individually (for loop maybe?)
    3. pass every item in the array through the function
        - function should return new items
    3b. push new items to new array (maybe define empty array within _map)
    4. Come up with test cases and test function, add conditions until each
    test case has been satisfied and will pass.
    */
    let rtrn = [];

    for (let i = 0; i < array.length; i++) {
        let currentItem = func(array[i]);
        rtrn.push(currentItem);
    }

    return rtrn;

};

// NOW WRITTEN OUT IN STEPS AND CODE 

//=======================================================================================

function _filter(array, func) {
    // CODE FUNCTION BASED ON STEPS BELOW
    /* Steps
        1. define and understand inputs: an array of items 'array' to be passed
        through a function 'func'
            1a. In test file define function 'func', it can be whatever, just 
            be mindful that every item in the array will pass through it. Make sure
            that 'func' returns a Boolean response as that will be the criteria by 
            which we "_filter" items in the array.
        2. Isolate every item in the array and pass it through 'func'.
            -KEEP IN MIND: '_filter()' should return a new (and shorter, in theory) array
            of items based on the 'true' or 'false' value returned by 'func'.
        3. create a condition in '_filter' that will push() (in this case) the items in the original
        array that return 'true' when passed through func (make sure to define a new variable
        that is an empty array inside the '_filter' function).
        4. Return new array of push() 'd values.
        5. Come up with test cases and test function, add conditions until each
        test case has been satisfied and will pass.
    */
    let kept = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (func(current) === true) {
            kept.push(current);
        }
    } return kept;
};

// NOW WRITTEN OUT IN STEPS AND CODE

//=======================================================================================

function _reduce(array, func, start) {
    // CODE FUNCTION BASED ON STEPS BELOW

    /* STEPS:
        1. define and understand the inputs of the function: an array of items to be '_reduce' 'd
        by the function, the function 'func', then a 'start' value to 
        start the '_reduce' process.
            1a. 'func' sets the parameter by which we '_reduce' the array.
        2. '_reduce' the items based on the parameter defined in 'func'. In this case, pass first
        two items into 'func', which should return only one value as a result. 
        3. run 'for' loop wherein you call 'func' 
            3a. I feel like maybe the 'start' is now the new value returned from the two items
            passed through 'func'? Cannot say for sure, ask about that.
        4. repeat process until the array of items has been '_reduced' down to one item.
        5. return the one remaining item.
        6. Come up with test cases and test function, add conditions until each
        test case has been satisfied and will pass.
    */

    for (let i = start; i < array.length; i++) {
        let runIt = func(array[start], array[start++]);
        let runItAgain = func(array[start], array[start + 2]);
        if (runIt === array[start]) {
            return runItAgain;
        } else {
            return func(array[start++], array[start + 2]);
        }

    }
}

// RIGHT NOW WRITTEN IN STEPS AND CODE, BUT NEED TO COME BACK TO THIS ONE, ISN'T QUITE RIGHT.

//=======================================================================================

function _all(array, func) {
    // CODE FUNCTION BASED ON THE STEPS BELOW

    /* STEPS:
    1. define and understand inputs: an array of items to passed through 'func', a function used
    as a parameter in the '_all' function.
        1a. 'func' will need to set some sort of condition that itself returns a boolean
        true/false return value.
    2. pass all items in the array through 'func' by calling the function within _all, 
    seems like this is the spot for a foor loop and indexing but also maybe .map().
    3. if all items in the array return 'true', then '_all' returns true.
    4. if any items in the array do not return 'true', then '_all' returns false.
    5. Come up with test cases and test function, add conditions until each
    test case has been satisfied and will pass.

    */

    for (i = 0; i < array.length; i++) {
        let satisfied = true;
        let current = array[i];
        if (func(current) !== true) {
            satisfied === false;
        }
        return satisfied;
    }
}
// NOW WRITTEN OUT IN STEPS AND CODE, BUT COMING BACK DOESN'T SEEM QUITE RIGHT

//=======================================================================================

function _some(array, func) {
    // CODE FUNCTION BASED ON THE STEPS BELOW

    /* STEPS:
    1. define and understand your inputs: an array of items, and a 'func' to 
    pass items in the array through.
        1a. 'func' will need to set some sort of condition that itself returns a boolean
        true/false return value.
    2. pass all items in the array through 'func' by calling the function within _all, 
    seems like this is the spot for a foor loop and indexing but also maybe .map().
    3. set conditions in '_some' function: if 1 or more items in the array return 'true' passed
    through 'func', then return true. if none return true, '_some' should return false.
    4. '_some' should return a boolean true/false. 
    5. Come up with test cases and test function, add conditions until each
    test case has been satisfied and will pass.
    */
} // RIGHT NOW ONLY WRITTEN OUT IN STEPS

//=======================================================================================

function _find(array, func) {

    // CODE FUNCTION BASED ON THE STEPS BELOW

    /*STEPS:
    1. define and understand your inputs: an array of items, and a 'func' to 
    pass items in the array through.
        1a. 'func' will need to return a boolean true/false return value.
    2. pass all items in the array through 'func' by calling the function within _find, 
    seems like this is the spot for a foor loop and indexing but also maybe .map().
    3. set conditions in '_find' to return the correct array item, in this case, the first item in the
    array that satisfies the return value defined in function 'func'. In this case, define a variabe to select
    this item in the array, then return that variable.
    4. return the first variable that satisfies the parameter set by 'func'.
    5. Come up with test cases and test function, add conditions until each
    test case has been satisfied and will pass. */

} // RIGHT NOW ONLY WRITTEN OUT IN STEPS

//=======================================================================================
