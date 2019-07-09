
const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints')

describe('calculate style points', () => {
    it('should calculate style points when they are all the same', () => {
        const actual = calculateStylePoints([19, 19, 19, 19, 19]);

        const expected = 57;

        assert.equal(actual, expected);
    });
    it('should calculate style points when they are diffrent', () => {
        const actual = calculateStylePoints([17.5, 17.5,  18, 18.5, 18]);

        const expected = 53.5;

        assert.equal(actual, expected);
    });
    it('should throw error when number of notes is incorrect', () => {
        const actual = calculateStylePoints([19, 19, 19, 19]);

        const expected = null;

        assert.equal(actual, expected);
    });
    it('should throw error when notes are not numbers', () => {
        const actual = calculateStylePoints([19, 19, 19, 19, 'a']);

        const expected = null;

        assert.equal(actual, expected);
    });
})