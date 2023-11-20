// destructure, import just the format
const { format } = require('date-fns');
// import version 4 as uuid, so that we can use it as uuid();
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async(message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        // append creates a file if it doesn't exist yet, but it will NOT create a directory - in this case the 'logs' folder
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (err) {
        console.log(err); // can also use console.error
    }
}

module.exports = logEvents; // exports logEvents function