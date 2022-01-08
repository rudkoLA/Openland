export const pop3 = function (a) {
	let aPoped = [];
	for (let i = 0; i < 3; i++) {
		if (!a[0]) {
			break;
		}
		aPoped.unshift(a.pop());
	}
	return aPoped;
};

export const splitBy3 = function (s) {
	let sArray = s.split('');
	let sFinal = [];

	while (sArray[0]) {
		sFinal.unshift(Number.parseInt(pop3(sArray).join('')));
	}
	return sFinal;
};

export const numberToWord = function (s) {
	if (s === '0') {
		return 'zero';
	}
	let scale = [
		'',
		' thousand',
		' million',
		' billion',
		' trillion',
		' quadrillion',
		' quintillion',
		' sextillion',
		' septillion',
		' octillion',
		' nonillion',
		' decillion',
		' undecillion',
		' duodecillion',
		' tredecillion',
		' quattuordecillion',
		' quindecillion',
	];
	let sNormal = splitBy3(s).reverse();
	let l = sNormal.length;
	let sWord = '';
	let i = 0;

	while (i < l) {
		let converted = convertHundredsToWord(sNormal[i]);

		if (!converted) {
		} else if (converted) {
			if (!sWord) {
				sWord = converted + scale[i];
			} else {
				sWord = converted + scale[i] + ' ' + sWord;
			}
		}
		i++;
	}
	return sWord;
};

const convertNaturalNumToWord = function (n) {
	const naturalNumbers = [
		'',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	return naturalNumbers[n];
};

const convertTeensNumToWord = function (n) {
	const teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', '', 'fifteen'];

	if (teenNumbers[n]) {
		return teenNumbers[n];
	} else {
		return convertNaturalNumToWord(n) + 'teen';
	}
};

const convertTensNumToWord = function (n) {
	const tensNumbers = [
		'',
		'',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'',
		'',
		'eighty',
	];
	if (tensNumbers[n]) {
		return tensNumbers[n];
	} else {
		return convertNaturalNumToWord(n) + 'ty';
	}
};

const convertHundredsToWord = function (n) {
	let firstDigit = n % 10;
	let tensDigit = Math.floor(n / 10) % 10;
	let hundredsDigit = Math.floor(n / 100);
	let result = '';

	if (hundredsDigit) {
		result += convertNaturalNumToWord(hundredsDigit) + ' hundred';
	}
	if (tensDigit) {
		if (result) {
			result += ' ';
		}
		if (tensDigit < 2) {
			result += convertTeensNumToWord(firstDigit);
		} else {
			result += convertTensNumToWord(tensDigit);
		}
	}
	if (tensDigit !== 1 && firstDigit) {
		if (result) {
			result += ' ';
		}
		result += convertNaturalNumToWord(firstDigit);
	}

	return result;
};

export const primes = (n) => {
	const result = [];
	const isPrime = Array(n).fill(true);
	let counter = 0;

	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i <= n; i++) {
		if (isPrime[i]) {
			for (let j = i * 2; j < n; j += i) {
				isPrime[j] = false;
			}
		}
	}

	isPrime.forEach((item, index) => {
		if (item) {
			result.push(index);
		}
	});

	return result;
};

export const max2 = (a, b) => (a > b ? a : b);

export const max3 = (a, b, c) => max2(max2(a, b), c);

export const max4 = (a, b, c, d) => max2(max2(max2(a, b), c), d);

export const maxN = (a, b, ...numbers) => {
	if (!b) return a;
	if (!numbers.length) return a > b ? a : b;

	return maxN(a > b ? a : b, ...numbers);
};

export const bubleSort = (a) => {
	for (let i = 0; i < a.length - 1; i++) {
		for (let j = 0; j < a.length - 1 - i; j++) {
			let temp;
			if (a[j] > a[j + 1]) {
				temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
			}
		}
	}
	return a;
};

export const pow = (num, power) => {
	if (!power) return 1;
	if (!(power % 2)) return pow(num ** 2, power / 2);
	return pow(num, power - 1) * num;
};

export const factorial = (num) => {
	if (num === 1) return num;
	return factorial(num - 1) * num;
};

export const getFormattedDate = () => {
	let tempDate = new Date();
	let refactoredDate = `${tempDate.getFullYear()}:${getFormattedTwoDigit(
		tempDate.getMonth() + 1
	)}:${getFormattedTwoDigit(tempDate.getDate())} ${getFormattedTwoDigit(
		tempDate.getHours()
	)}+${getFormattedTwoDigit(tempDate.getMinutes())}`;
	return refactoredDate;
};
const getFormattedTwoDigit = (n) => {
	if (n.toString().length === 1) {
		return '0' + n;
	}
	return n;
};

export const getCapitalizedString = (str) => {
	let arr = str.split(' ');
	let strArr = arr.map((item) => item.split(''));
	let finalArr = strArr.map((item) => {
		if (!item.length) {
			return item;
		}
		item[0] = item[0].toUpperCase();
		return item;
	});
	let finalStr = finalArr.map((item) => item.join(''));
	return finalStr.join(' ');
};
