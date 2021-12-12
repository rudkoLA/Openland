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
		expect(numberToWord(90)).toEqual('ninety');
	});

	it('should work for 100s', () => {
		expect(numberToWord(100)).toEqual('one hundred');
		expect(numberToWord(109)).toEqual('one hundred nine');
		expect(numberToWord(119)).toEqual('one hundred nineteen');
		expect(numberToWord(120)).toEqual('one hundred twenty');
		expect(numberToWord(123)).toEqual('one hundred twenty three');
		expect(numberToWord(597)).toEqual('five hundred ninety seven');
		expect(numberToWord(997)).toEqual('nine hundred ninety seven');
		expect(numberToWord(209)).toEqual('two hundred nine');
	});

	it('should work for 1000s', () => {
		expect(numberToWord(1000)).toEqual('one thousand');
		expect(numberToWord(2345)).toEqual('two thousand three hundred forty five');
		expect(numberToWord(999999)).toEqual('nine hundred ninety nine thousand nine hundred ninety nine');
	});
	it('should work for millions', () => {
		expect(numberToWord(1000000)).toEqual('one million');
		expect(numberToWord(2345678)).toEqual('two million three hundred forty five thousand six hundred seventy eight');
		expect(numberToWord(999999999)).toEqual('nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
	});
});
