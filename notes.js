const fs=require('fs');
const chalk=require('chalk');

const addnote=(title,body)=>{
    const notes=loadNotes();
    const filternodes= notes.find((note)=>note.title===title)
    if(filternodes===undefined){
        notes.push({
            title,
            body
        })
        savenote(notes);
        console.log(chalk.bold.green('Note added'));
    }
    else{
        console.log(chalk.bold.red('Title taken!'));
    }
}
const listnote=()=>{
    const notes=loadNotes();
    notes.forEach((note)=>console.log(chalk.bold.blue(note.title)))
}

const removenote=(title)=>{
    const notes=loadNotes();
    const newnotes=notes.filter((note)=>note.title!==title)
    if(notes.length>newnotes.length)
        console.log(chalk.bold.green('Note removed'));
    else
        console.log(chalk.bold.red('No Note found'));
    savenote(newnotes);
}

const savenote=(notes)=>{
    const newnotes=JSON.stringify(notes);
    fs.writeFileSync('notes.json',newnotes);
}

const loadNotes=()=>{
    try{
        const dataJSON=fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []; 
    }
}

const readnotes=(title)=>{
    const notes=loadNotes();
    const note=notes.find((note)=>{
        return note.title==title
    })
    if(note===undefined){
        console.log(chalk.bold.red('Note Not Found'))
    }
    else{
        console.log(chalk.green(note.title));
        console.log(chalk.green(note.body));
    }
}

module.exports={
    addnote:addnote,
    removenote:removenote,
    listnote:listnote,
    readnotes:readnotes
}