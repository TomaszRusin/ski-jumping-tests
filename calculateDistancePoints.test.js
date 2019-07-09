
const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints')

describe('calculateDistancePoints', () => {
    describe('input check', () => {
        it('should throw error when no value is passed', () => {
            const actual = calculateDistancePoints();

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should throw error when wrong distance is passed', () => {
            const actual = calculateDistancePoints('asd', 'normal', 98);

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should throw error when wrong hill size is passed', () => {
            const actual = calculateDistancePoints(111, 23, 98);

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should throw error when wrong kPoint is passed', () => {
            const actual = calculateDistancePoints(111, 'normal', 'asd');

            const expected = null;

            assert.equal(actual, expected);
        });
    })
    describe('normal', () => {
        it('should calculate the distance score properly when k point is reached', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);

            const expected = 86;

            assert.equal(actual, expected);
        });
        it('should calculate the distance score properly when k point is not reached', () => {
            const actual = calculateDistancePoints(95, 'normal', 98);

            const expected = 54;

            assert.equal(actual, expected);
        });
    });

    describe('large', () => {
        it('should calculate the distance score properly when k point is reached', () => {
            const actual = calculateDistancePoints(134, 'large', 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });
        it('should calculate the distance score properly when k point is not reached', () => {
            const actual = calculateDistancePoints(117, 'large', 120);

            const expected = 54.6;

            assert.equal(actual, expected);
        });
    });

    describe('flying', () => {
        it('should calculate the distance score properly when k point is reached', () => {
            const actual = calculateDistancePoints(227.5, 'flying', 200);

            const expected = 152.4;

            assert.equal(actual, expected);
        });
        it('should calculate the distance score properly when k point is not reached', () => {
            const actual = calculateDistancePoints(197, 'flying', 200);

            const expected = 116.4;

            assert.equal(actual, expected);
        });
    });
})
