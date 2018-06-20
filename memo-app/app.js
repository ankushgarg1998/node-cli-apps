const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of the Note (unique)',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of the Note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new Note.', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all Notes.')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('Note Created!');
        } else {
            console.log('Note title already used. Please try again.');
        }
        break;

    case 'list':
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(note => notes.logNote(note));
        break;

    case 'read':
        var note = notes.getNote(argv.title);
        if(note) {
            notes.logNote(note);
        } else {
            console.log('No such note found.');
        }
        break;

    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note was removed!': 'No such note found.'
        console.log(message);
        break;

    default:
        console.log('Command not recognised.');
};