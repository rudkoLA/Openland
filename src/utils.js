export const numberToWord = function (n) {
	let firstDigit = n % 10;
	let tensDigit = Math.floor(n / 10);
	let hundredsDigit = Math.floor(n / 100);

	if (n === 0) {
		return 'zero';
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
			} 
			else {
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
		'',
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
