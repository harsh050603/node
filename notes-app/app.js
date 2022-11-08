/*const fs = require('fs')
fs.writeFileSync('notes.txt','My name is Harsh Notaria.')
fs.appendFileSync('notes.txt',' My age is 19.')*/
// const x = require('./utils.js')
//const name = 'harsh'
// const sum = add(4,-2)
// console.log(sum);
//const validator = require('validator')

const chalk = require('chalk')

const getNotes = require('./notes.js') 
const msg=getNotes()
console.log(msg)

//console.log(validator.isURL('https://mead.io'))
const greenMsg = chalk.blue.inverse.bold('Success!')
console.log(greenMsg)




