// FS (file system) async module
const { readFile, writeFile } = require('fs')
console.log('start');


// callback hell but good for illustration of async advantage 
readFile(
    './content/first.txt',
    'utf8', 
    (err, result) => {
        if(err) {
            console.log(err)
            return;
        } 
        const first = result;
        readFile(
            './content/second.txt', 
            'utf8', 
            (err, result) => {
                if(err) {
                    console.log(err)
                    return;
                } 
            const second = result;
            writeFile(
                './content/result-async.txt', 
                `Here is the result : ${first}, ${second}`, 
                (err, result) => {
                    if(err) {
                        console.log(err)
                        return
                    }
                    console.log('done with this task')
                }
            )
        })
    }
)

console.log('starting the next task');
// async is useful for running multiple tasks in unison according to their file size