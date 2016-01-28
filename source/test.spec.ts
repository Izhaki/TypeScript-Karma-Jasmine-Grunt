import {Test} from './test';

describe('Dummy test', function() {
    it( 'Should be true', function() {
        var iTest = new Test();
        expect( iTest.isTrue() ).toBe( false );
    });
});
