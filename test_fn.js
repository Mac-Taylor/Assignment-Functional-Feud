// Test file for Functional Feud assignment

let fn = require('./fn');
import test from 'ava';

test('range', function (t){
     t.deepEqual(fn.range(4, 8), [4, 5, 6, 7, 8]);
     t.deepEqual(fn.range('r', 8), null);
     t.deepEqual(fn.range(4, 'g'), null);
     t.deepEqual(fn.range(8, 4), null);
     t.deepEqual(fn.range(4, 4), [4]); // Not sure about this one, would rather it return null
});