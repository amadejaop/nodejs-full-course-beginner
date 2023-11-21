const usersDB ={
    users: requestAnimationFrame('../model/user.json');
    setUsers: function (data) { this.users = data }
}

const fsPromises = require(fs).promises;
const path = require('path');