
const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    it('should properly calculate total points', () => {
        const actual = calculateTotalPoints(
                111,
                'normal',
                98, 
                [19.0, 19.5, 19.0, 19.0, 19.0], 
                3.2,
                -14.4
            );

        const expected = 131.8;

        assert.equal(actual, expected);
    });
    it('should throw error if incorrect windFactor is passed', () => {
        const actual = calculateTotalPoints(
                111,
                'normal', 
                98, 
                [19.0, 19.5, 19.0, 19.0, 19.0],
                'bac',
                -14.4
            );

        const expected = null;

        assert.equal(actual, expected);
    });
    it('should throw error if incorrect gateFactor is passed', () => {
        const actual = calculateTotalPoints(
                111, 
                'normal',
                98, 
                [19.0, 19.5, 19.0, 19.0, 19.0], 
                3.2, 
                'abc'
             );

        const expected = null;

        assert.equal(actual, expected);
    });
});