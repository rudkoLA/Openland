export const numberToWord = function (n) {
	let tensDigit = Math.floor(n / 10);
	let firstDigit = n % 10;

	if (n === 0) {
		return 'zero';
	} else if (tensDigit === 0) {
		return convertNaturalNumToWord(n);
	} else if (tensDigit === 1) {
		return convertTeensNumToWord(n % 10);
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
		'eighty'
	];
    if (tensNumbers[n]) {
        return tensNumbers[n];
    } else {
        return convertNaturalNumToWord(n) + 'ty';
    }
};
