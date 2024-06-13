function getMean(values) {
    // weighted means, lowest weight for first element, highest for last.
    let mean = values.reduce(function (accumulator, currentValue) {
        return (accumulator + currentValue) / 2;
    }, 0);
    return mean;
}

let offsetQueue = [];
let sampleSize = 10;
let offset = 0;

// update lag
offsetQueue.push(offset);
if (offsetQueue.length > sampleSize) {
    offsetQueue.shift();
}

offset = getMean(offsetQueue) - lag * 0.5;
console.log({ lag, offset, milliseconds });
