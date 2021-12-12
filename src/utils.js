export const numberToWord = function (n) {
	let firstDigit = Math.floor(n % 10);
	let hundreds = n % 1000;
	let thousands = Math.floor(n / 1000) % 1000;
	let millions = Math.floor(n / 1000000);

	if (!millions) {
		if (!thousands) {
			return convertHundredsToWord(hundreds);
		} else {
			if (!firstDigit) {
				return convertHundredsToWord(thousands) + ' thousand';
			} else {
				return (
					convertHundredsToWord(thousands) +
					' thousand ' +
					convertHundredsToWord(hundreds)
				);
			}
		}
	} else {
		if (!thousands) {
			if (!firstDigit) {
				return convertHundredsToWord(millions) + ' million';
			} else {
				return (
					convertHundredsToWord(millions) +
					' million ' +
					convertHundredsToWord(hundreds)
				);
			}
		} else {
			if (!firstDigit) {
				return (
					convertHundredsToWord(millions) +
					' million ' +
					convertHundredsToWord(thousands) +
					' thousand'
				);
			} else {
				return (
					convertHundredsToWord(millions) +
					' million ' +
					convertHundredsToWord(thousands) +
					' thousand ' +
					convertHundredsToWord(hundreds)
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
