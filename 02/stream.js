// stream is good for large files (grabbing little chunks of data at a time) this is more efficient and easier on the application
const fs = require('fs');

// specifying file with path and __dirname is better
const rs = fs.createReadStream('./files/lorem.txt',{encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

/* rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
}); */

// pipe is more efficient than the .on method
rs.pipe(ws);