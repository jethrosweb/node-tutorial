// GLOBALS - NO WINDOW

// __dirname    - path to current directory 
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about the environment (env) where the program is being executed

console.log(__dirname)

// setInterval available
setInterval(() => {
    console.log("Hello World")
}, 1000)

// setTimeout available
setTimeout(() => {
    console.log("Hello Node")
}, 3000)

// To run in terminal:
// Can type node app.js or node app - the .js is not necessary