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

    if (typeof(min) !== 'number') {
        return null;
    } // if min isn't a number, return 'null'

     if (typeof(max) !== 'number') {
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

console.log(range(10, 18)); 

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
}; // RIGHT NOW ONLY WRITTEN OUT IN STEPS

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

    */
}; // RIGHT NOW ONLY WRITTEN IN STEPS

//=======================================================================================

function _reduce(array, func, start){
    // CODE FUNCTION BASED ON STEPS BELOW

    /* STEPS:
        1. define and understand the inputs of the function: an array of items to be '_reduce' 'd
        by the function, the function 'func', then a 'start' value (I'm thinking it'll be zero) to 
        start the '_reduce' process.
            1a. 'func' sets the parameter by which we '_reduce' the array.
        2. let start = 0.
        3. run 'for' loop for every item in the array based on parameter defined in 'func'.
        4. '_reduce' the items based on the parameter (I'm assuming an inequality will be used)
        defined in 'func'. 
            4a. splice() items out of the array based on the parameter defined in 'func' until
            there is only one value remaining (maybe .length = 1 type of operation?)
        5. return that number.
    */
}

//=======================================================================================

function _all(array, func){
    // CODE FUNCTION BASED ON THE STEPS BELOW

    

}

//=======================================================================================

function _some(){

}

//=======================================================================================

function _find(){

}


//=======================================================================================
