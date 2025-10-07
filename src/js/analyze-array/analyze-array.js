function analyzeArray(numbers) {
    let average = 0;
    let length = 0;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;

    for (let i = 0; i < numbers.length; i++) {
        average += numbers[i];
        length++;

        if (max < numbers[i]) max = numbers[i];
        if (min > numbers[i]) min = numbers[i];
    }

    average /= length;
    average = Number(average.toFixed(6));

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

module.exports = analyzeArray;
