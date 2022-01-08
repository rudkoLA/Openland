import {
	numberToWord,
	splitBy3,
	pop3,
	primes,
	max2,
	max3,
	max4,
	maxN,
	bubleSort,
	pow,
	factorial,
	getFormattedDate,
	getCapitalizedString,
} from './utils';

describe('pop3', () => {
	it('should exist', () => {
		expect(pop3).toBeTruthy();
	});

	it('should work', () => {
		const list = ['1', '2', '3', '4', '5'];

		expect(pop3(list)).toEqual(['3', '4', '5']);

		expect(list).toEqual(['1', '2']);
	});

	it('should work for small lists', () => {
		const list = ['1', '2'];

		expect(pop3(list)).toEqual(['1', '2']);

		expect(list).toEqual([]);
	});

	it('should work for even smaller lists', () => {
		const list = ['1'];

		expect(pop3(list)).toEqual(['1']);

		expect(list).toEqual([]);
	});
});

describe('split by 3', () => {
	it('should exist', () => {
		expect(splitBy3).toBeTruthy();
	});

	it('should work', () => {
		expect(splitBy3('12345678901234567890')).toEqual([
			12, 345, 678, 901, 234, 567, 890,
		]);
	});
});

describe('numberToWord', () => {
	it('should exist', () => {
		expect(numberToWord).toBeTruthy();
	});

	it('should work for 0 to 9', () => {
		expect(numberToWord('1')).toEqual('one');
		expect(numberToWord('2')).toEqual('two');
		expect(numberToWord('3')).toEqual('three');
		expect(numberToWord('4')).toEqual('four');
		expect(numberToWord('5')).toEqual('five');
		expect(numberToWord('6')).toEqual('six');
		expect(numberToWord('7')).toEqual('seven');
		expect(numberToWord('8')).toEqual('eight');
		expect(numberToWord('9')).toEqual('nine');
		expect(numberToWord('0')).toEqual('zero');
	});

	it('shoult work for 10 to 19', () => {
		expect(numberToWord('10')).toEqual('ten');
		expect(numberToWord('19')).toEqual('nineteen');
		expect(numberToWord('13')).toEqual('thirteen');
	});

	it('should work for 20-29', () => {
		expect(numberToWord('20')).toEqual('twenty');
		expect(numberToWord('21')).toEqual('twenty one');
		expect(numberToWord('22')).toEqual('twenty two');
		expect(numberToWord('29')).toEqual('twenty nine');
	});

	it('should work for 30-99', () => {
		expect(numberToWord('30')).toEqual('thirty');
		expect(numberToWord('52')).toEqual('fifty two');
		expect(numberToWord('99')).toEqual('ninety nine');
		expect(numberToWord('90')).toEqual('ninety');
	});

	it('should work for 100s', () => {
		expect(numberToWord('100')).toEqual('one hundred');
		expect(numberToWord('109')).toEqual('one hundred nine');
		expect(numberToWord('119')).toEqual('one hundred nineteen');
		expect(numberToWord('120')).toEqual('one hundred twenty');
		expect(numberToWord('123')).toEqual('one hundred twenty three');
		expect(numberToWord('597')).toEqual('five hundred ninety seven');
		expect(numberToWord('997')).toEqual('nine hundred ninety seven');
		expect(numberToWord('209')).toEqual('two hundred nine');
	});

	it('should work for 1000s', () => {
		expect(numberToWord('1000')).toEqual('one thousand');
		expect(numberToWord('2345')).toEqual(
			'two thousand three hundred forty five'
		);
		expect(numberToWord('999999')).toEqual(
			'nine hundred ninety nine thousand nine hundred ninety nine'
		);
	});
	it('should work for millions', () => {
		expect(numberToWord('1000000')).toEqual('one million');
		expect(numberToWord('2345678')).toEqual(
			'two million three hundred forty five thousand six hundred seventy eight'
		);
		expect(numberToWord('999999999')).toEqual(
			'nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine'
		);
	});
	it('should work for any number', () => {
		expect(numberToWord('12345678901234567890')).toEqual(
			'twelve quintillion three hundred forty five quadrillion six hundred seventy eight trillion nine hundred one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety'
		);
	});
});

describe('prime numbers generator', () => {
	it('should generate prime numbers up to N', () => {
		expect(primes(12)).toEqual([2, 3, 5, 7, 11]);
		expect(primes(123)).toEqual([
			2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
			71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
		]);
	});
});

describe('max number', () => {
	it('should have max2 function', () => {
		expect(max2(10, 20)).toEqual(20);
	});

	it('should have max3 function', () => {
		expect(max3(20, 40, 10)).toEqual(40);
	});

	it('should have max4 function', () => {
		expect(max4(20, 40, 10, 30)).toEqual(40);
	});

	it('should have maxN function', () => {
		expect(
			maxN(
				20,
				40,
				10,
				30,
				2,
				3,
				5,
				7,
				11,
				13,
				17,
				19,
				23,
				29,
				31,
				37,
				41,
				43,
				47,
				53,
				59,
				61,
				67,
				71,
				73,
				79,
				83,
				89,
				97,
				101,
				103,
				107,
				109,
				113
			)
		).toEqual(113);
	});
});

describe('buble sort', () => {
	it('should sort an array of numbers', () => {
		expect(
			bubleSort([
				1, 5, 6, 89, 75, 4, 56, 6, 5, 6, 6, 5, 6, 6, 5, 32, 3, 6, 53, 23, 45,
				16, 3, 4, 56, 12, 3, 42, 34, 5, 6, 34, 56, 3, 7, 45, 63, 3, 54, 36, 4,
				53, 65, 3, 56, 3, 79, 8, 65, 16, 31, 26, 78,
			])
		).toEqual([
			1, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7,
			8, 12, 16, 16, 23, 26, 31, 32, 34, 34, 36, 42, 45, 45, 53, 53, 54, 56, 56,
			56, 56, 63, 65, 65, 75, 78, 79, 89,
		]);
	});
});

describe('pow', () => {
	it('should exist', () => {
		expect(pow).toBeDefined();
	});
	it('should return power of number', () => {
		expect(pow(2, 4)).toEqual(16);
		expect(pow(4, 3)).toEqual(64);
	});
});

describe('factorial', () => {
	it('should exist', () => {
		expect(factorial).toBeDefined();
	});
	it('should return factorial', () => {
		expect(factorial(1)).toEqual(1);
		expect(factorial(3)).toEqual(6);
		expect(factorial(5)).toEqual(120);
	});
});

xdescribe('getFormattedDate', () => {
	it('should return current date', () => {
		expect(getFormattedDate()).toEqual('2022:01:09 00+12');
	});
});

describe('getCapitalizedString', () => {
	it('should return current date', () => {
		expect(getCapitalizedString('Hello darkness my old    friend!')).toEqual(
			'Hello Darkness My Old    Friend!'
		);
	});
});
