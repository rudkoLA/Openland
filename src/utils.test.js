import { numberToWord } from './utils';

describe('numberToWord', () => {
	it('should exist', () => {
		expect(numberToWord).toBeTruthy();
	});

	it('should work for 0 to 9', () => {
		expect(numberToWord(1)).toEqual('one');
		expect(numberToWord(2)).toEqual('two');
		expect(numberToWord(3)).toEqual('three');
		expect(numberToWord(4)).toEqual('four');
		expect(numberToWord(5)).toEqual('five');
		expect(numberToWord(6)).toEqual('six');
		expect(numberToWord(7)).toEqual('seven');
		expect(numberToWord(8)).toEqual('eight');
		expect(numberToWord(9)).toEqual('nine');
		expect(numberToWord(0)).toEqual('zero');
	});

	it('shoult work for 10 to 19', () => {
		expect(numberToWord(10)).toEqual('ten');
		expect(numberToWord(19)).toEqual('nineteen');
		expect(numberToWord(13)).toEqual('thirteen');
	});

	it('should work for 20-29', () => {
		expect(numberToWord(20)).toEqual('twenty');
		expect(numberToWord(21)).toEqual('twenty one');
		expect(numberToWord(22)).toEqual('twenty two');
		expect(numberToWord(29)).toEqual('twenty nine');
	});

	it('should work for 30-99', () => {
		expect(numberToWord(30)).toEqual('thirty');
		expect(numberToWord(52)).toEqual('fifty two');
		expect(numberToWord(99)).toEqual('ninety nine');
	});
});
