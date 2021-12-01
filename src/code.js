let fs = require('fs');

//Part 1
try {
    let data = fs.readFileSync('./src/depthMeasurement.txt', 'utf8');
    let splitData = data.toString().split('\n')
    let count = 0
    for(let i = 0; i < splitData.length; i++) {
        if(Number(splitData[i+1]) > Number(splitData[i])) {
            count = count + 1
        };
    };
    console.log(count)
} catch (error) {
    console.log(`Error: ${error.stack}`);
};

//part 2
try {
    let data = fs.readFileSync('./src/depthMeasurement.txt', 'utf8');
    let splitData = data.toString().split('\n')
    let count = 0
    for(let i = 0; i < splitData.length; i++) {
        let depthAdditionFirst = Number(splitData[i]) + Number(splitData[i+1]) + Number(splitData[i+2])
        let depthAdditionSecond= Number(splitData[i+1]) + Number(splitData[i+2]) + Number(splitData[i+3])
        if(depthAdditionFirst < depthAdditionSecond) {
            count = count + 1
        };
    };
    console.log(count)
} catch (error) {
    console.log(`Error: ${error.stack}`);
};
