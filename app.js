const yargs=require('yargs');
const  notes=require('./notes.js');

yargs.command({
    command:'add',
    describe:'Add a new node',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'description about note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addnote(argv.title,argv.body);
    },
})

yargs.command({
    command:'remove',
    describe:'Remove a node',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removenote(argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'List the notes',
    handler(){
        notes.listnote();
    }
})

yargs.command({
    command:'read',
    describe:'Read the nodes',
    builder:{
        title:{
            describe:'Read the nodes',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readnotes(argv.title);
    }
})

yargs.parse();



// const args=yargs.argv;
// console.log(args);
// console.log(args.ships);

// const utils=require('./utils.js');
// var sum=utils(4,2);
// console.log(sum);
// const validator=require('validator');
// console.log(validator.isEmail('gmail.com'))
// console.log(validator.isURL('https://mead.io'))

// const chalk=require('chalk');
// const red=chalk.red.bold;
// const green=chalk.green;
// console.log(chalk.blue('My name is')+chalk.green.inverse('hii babes'));
// console.log(chalk.inverse('hii buddy'));
// console.log(red("ERR!"));
// console.log(green("Success!"));