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
