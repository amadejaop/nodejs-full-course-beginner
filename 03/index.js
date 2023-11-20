// destructure, import just the format
const { format } = require('date-fns');
// import version 4 as uuid, so that we can use it as uuid();
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());
console.log();