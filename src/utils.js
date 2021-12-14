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
	const teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen'];

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
	let tensDigit = Math.floor(n / 10);
	let hundredsDigit = Math.floor(n / 100);

	if (n === 0) {
		return '';
	} else if (tensDigit === 0) {
		return convertNaturalNumToWord(n);
	} else if (tensDigit === 1) {
		return convertTeensNumToWord(firstDigit);
	} else if (tensDigit > 1 && tensDigit < 10) {
		if (firstDigit === 0) {
			return convertTensNumToWord(tensDigit);
		} else {
			return (
				convertTensNumToWord(tensDigit) +
				' ' +
				convertNaturalNumToWord(firstDigit)
			);
		}
	} else if (hundredsDigit > 0) {
		tensDigit = tensDigit % 10;
		if (tensDigit === 0) {
			if (firstDigit === 0) {
				return convertNaturalNumToWord(hundredsDigit) + ' hundred';
			} else {
				return (
					convertNaturalNumToWord(hundredsDigit) +
					' hundred ' +
					convertNaturalNumToWord(firstDigit)
				);
			}
		} else if (tensDigit === 1) {
			return (
				convertNaturalNumToWord(hundredsDigit) +
				' hundred ' +
				convertTeensNumToWord(firstDigit)
			);
		} else {
			if (firstDigit === 0) {
				return (
					convertNaturalNumToWord(hundredsDigit) +
					' hundred ' +
					convertTensNumToWord(tensDigit)
				);
			} else {
				return (
					convertNaturalNumToWord(hundredsDigit) +
					' hundred ' +
					convertTensNumToWord(tensDigit) +
					' ' +
					convertNaturalNumToWord(firstDigit)
				);
			}
		}
	}
};
