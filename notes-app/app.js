/*const fs = require('fs')
fs.writeFileSync('notes.txt','My name is Harsh Notaria.')
fs.appendFileSync('notes.txt',' My age is 19.')*/
// const x = require('./utils.js')
//const name = 'harsh'
// const sum = add(4,-2)
// console.log(sum);
//const validator = require('validator')

const chalk = require('chalk')
const { describe, demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js') 

//const msg=getNotes()
//console.log(msg)
//console.log(validator.isURL('https://mead.io'))
// const greenMsg = chalk.blue.inverse.bold('Success!')
// console.log(greenMsg)
// console.log(process.argv[2])

//const command = process.argv[2]

//console.log(process.argv)

// if(command==='add'){
//     console.log('Adding Note!')
// }else if(command==='remove'){
//     console.log('Removing Note!')
// }

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
           describe:'Note body',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//list command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
    notes.listNotes()
    }
})

//read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()