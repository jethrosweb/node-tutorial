// comparison code for 11-fs-async (Promise & Async/Await)
const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// Promise
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// Async/Await
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first)
//         console.log(second);
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

// Async/Await simplified

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}`, {flag: 'a'})//appending with third variable
        console.log(first)
        console.log(second);
    } catch (error) {
        console.log(error)
    }
}

start()