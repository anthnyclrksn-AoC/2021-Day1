let fs = require('fs');

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
