// Test file for Functional Feud assignment

let fn = require('./fn');
import test from 'ava';

function timesTwo(nmbr) {
    return nmbr * 2;
}

function FiveOrLarger(nmbr) {
    if (nmbr >= 5) {
        return true;
    } else {
        if (nmbr < 5) {
            return false;
        }
    }
}

function greaterThan(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}

function divisByThree(num) {
    return num % 3 === 0;
}

function singledigits(nmbr) {
    if (nmbr < 10) {
        return true;
    } else {
        return false;
    }
}


test('range', function (t) {
    t.deepEqual(fn.range(4, 8), [4, 5, 6, 7, 8]);
    t.deepEqual(fn.range('r', 8), null);
    t.deepEqual(fn.range(4, 'g'), null);
    t.deepEqual(fn.range(8, 4), null);
    t.deepEqual(fn.range(4, 4), [4]); // Not sure about this one, would rather it return null
});

test('_map', function (t) {
    t.deepEqual(fn._map([1, 2, 3], timesTwo), [2, 4, 6]);
    t.deepEqual(fn._map([1, 2, 3], function (nmbr) {
        return nmbr * 2;
    }), [2, 4, 6]);
}); // COME BACK AND WRITE SOME MORE TEST CASES.

test('_filter', function (t) {
    t.deepEqual(fn._filter([5, 4, 7, 8, 2, 1], FiveOrLarger), [5, 7, 8]);
    t.deepEqual(fn._filter([1, 2, 3, 4, 5, 6, 7, 8], function even(x) {
        return x % 2 === 0;
    }), [2, 4, 6, 8]);
    t.deepEqual(fn._filter([3, 4, 5, 6, 9, 12, 13, 14, 15], divisByThree), [3, 6, 9, 12, 15]);
    t.deepEqual(fn._filter([3, 4, 5, 6, 9, 12, 13, 14, 15], singledigits), [3, 4, 5, 6, 9]);
});  // COME BACK AND WRITE SOME MORE TEST CASES 

test('_reduce', function (t) {
    t.deepEqual(fn._reduce([16, 2, 31, 4, 57, 23], greaterThan, 0), 57);
    t.deepEqual(fn._reduce([16, 2, 57, 4, 31, 23], greaterThan, 0), 57);
}); // Needs more test cases, but right now it passes this test

/*test('_all', function (t) {
    t.deepEqual(fn._all([6, 7, 8, 9], FiveOrLarger), true);
    t.deepEqual(fn._all([2, 7, 8, 9], FiveOrLarger), false);
});*/



