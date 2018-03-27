'use strict';

const double = require('../../src/server');

describe('server', () => {

    test('some test runs', (done) => {
        expect(2).toEqual(double(1));
        done();        
    })
});
