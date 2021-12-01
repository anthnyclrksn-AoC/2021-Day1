let fs = require('fs');

try {
    let data = fs.readFileSync('./src/puzzleInput.txt', 'utf8');
    console.log(data.toString());
} catch (err) {
    console.log(`Error: ${err.stack}`);
};
