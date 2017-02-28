const chai = require('chai');
const { alphaToNum, numToAlpha, buildColumnsArray } = require('../index');


describe('Alphabet Numbers with base 26', function() {

    describe('alphaToNum', function() {
        it('alphaToNum(\'A\') should be equal 0', function() {
            expect(alphaToNum('A')).should.equal(0);
        });
        it('alphaToNum(\'HELLO\') should be equal 3752126', function() {
            alphaToNum('HELLO').should.equal(3752126);
        });
    });

    describe('numToAlpha', function() {
        it('numToAlpha(3) should be equal \'D\'', function() {
            numToAlpha(3).should.equal('D');
        });
        it('numToAlpha(1337) should be equal 3752126', function() {
            numToAlpha(1337).should.equal('AYL');
        });
    });

    describe('Alphabet Numbers range', function() {
        it('_buildColumnsArray(\'B10:K10\') should be deep equal [ \'B\', \'C\', \'D\', \'E\', \'F\', \'G\' , \'H\']', function() {
            expect(buildColumnsArray('B10:H10')).should.deep.equal(['B', 'C', 'D', 'E', 'F', 'G', 'H']);
        });

        it('_buildColumnsArray(\'A1: CA38\') should be equal [\'A\', \'B\', \'C\', \'D\', \'E\', \'F\', \'G\', \'H\', \'I\', \'J\', \'K\', \'L\', \'M\', \'N\', \'O\', \'P\', \'Q\', \'R\', \'S\', \'T\', \'U\', \'V\', \'W\', \'X\', \'Y\', \'Z\', \'AA\', \'AB\', \'AC\', \'AD\', \'AE\', \'AF\', \'AG\', \'AH\', \'AI\', \'AJ\', \'AK\', \'AL\', \'AM\', \'AN\', \'AO\', \'AP\', \'AQ\', \'AR\', \'AS\', \'AT\', \'AU\', \'AV\', \'AW\', \'AX\', \'AY\', \'AZ\', \'BA\', \'BB\', \'BC\', \'BD\', \'BE\', \'BF\', \'BG\', \'BH\', \'BI\', \'BJ\', \'BK\', \'BL\', \'BM\', \'BN\', \'BO\', \'BP\', \'BQ\', \'BR\', \'BS\', \'BT\', \'BU\', \'BV\', \'BW\', \'BX\', \'BY\', \'BZ\', \'CA\']', function() {
            expect(buildColumnsArray('A1:CA38')).should.deep.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA']);
        });
    });

});