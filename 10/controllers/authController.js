const usersDB ={
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.'});
    // check if username exists
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); // 401 means unauthorized
    // evaluate password if user is found
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        // create JWTs (2: normal token and refresh token)
        res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };