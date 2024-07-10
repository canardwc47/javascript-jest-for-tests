// ex6.test.js

import { findMaxValue, removeDuplicates, includesValue, sortArray } from './ex6';

describe('findMaxValue', () => {
    test('should return the maximun value in an array', () => {
        const arr = [1,3,5,2,4];
        expect(findMaxValue(arr)).toBe(5);
    });
});

describe('removeDuplicates', () => {
    test('should remove duplicate values from an array', () => {
        const arr = [1,2,2,3,4,4,5];
        expect(removeDuplicates(arr)).toEqual([1,2,3,4,5]);
    });
});

describe('includesValue', () => {
    test('should check if an array includes a specific value', () => {
        const arr = [1,2,3,4,5];
        expect(includesValue(arr, 3)).toBe(true);
        expect(includesValue(arr, 6)).toBe(false);
    });
});

describe('sortArray', () => {
    test('should sort an array of numbers in ascending order', () => {
        const arr = [ 5,3,1,4,2];
    });
});