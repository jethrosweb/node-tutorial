// FS (file system) sync module
const { readFileSync, writeFileSync } = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' } // used to append to text inside file
)

// if the writeFileSync function was large thus took a long time to run 
// it would be an issue for running the below console logs. 
console.log('done with this task');
console.log('starting the next one');