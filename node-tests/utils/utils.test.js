const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('Should add two numbers.', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });
    });

    it('Should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7);
            done();
        });
    });

    it('Should Square a number', () => {
        var res = utils.square(3);

        expect(res).toBe(9).toBeA('number');
    });
});