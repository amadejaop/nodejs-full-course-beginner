const fs = require('fs');

// if the directory I want to create does NOT yet exist
if (!fs.existsSync('./new')) {
    // create a new directory
    fs.mkdir('./new', err => {
        if (err) throw err;
        console.log('Directory created...');
    });
}

if (fs.existsSync('./new')) {
    // remove a new directory
    fs.rmdir('./new', err => {
        if (err) throw err;
        console.log('Directory removed...');
    });
} 


