// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);

        // if we use unlink we don't have to use "data" as a second argument, this method deletes file
        // deletes starter.txt
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);

        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you!');

        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();

// instead of hardcoding the directory use path
/*
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data); // logs buffer data if there is no encoding; logs contents of the file if you type 'utf-8'
    console.log(data.toString()); // logs contents of the file in both cases (with and without 'utf-8')
}); */

// readFile and node in general (methods and functions) are aynchronous (doesn't wait for one command to finish processing before tackling the rest of the code)
// asynchronous: we don't know which operation will complete first, it could be reading file, it could be writing file,...
// UNLESS you put ex.: append inside of the callback of write and rename inside callback of append; in this way you can control it
// nesting so much can lead to callback hell (in vanilla JS you can use async await)
    // console.log('Hello...');

// first argument: directory with a name of the file you want to create, second argument: text you want to write to this file, third argument: error
/* 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', err => {
    if (err) throw err;
    console.log('Write complete.');

    // appendFile will modify an existing file, will create file if it doesn't exist
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', err => {
        if (err) throw err;
        console.log('Append complete.');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), err => {
            if (err) throw err;
            console.log('Rename complete.');
        });
    });
});
 */


// exit on uncaught errors
// process is already available in node.js, no need to import it
// this is available in node.js documentation
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
