const User = require('../model/User');

const handleLogout = async (req, res) => {
    // frontend: on client, also delete the access token (can't do that in backend)

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // no content
    const refreshToken = cookies.jwt;

    // is refresh token in db?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None' });
        return res.sendStatus(204); // success, no content
    }
    
    // delete the refresh token in the db
    foundUser.refreshToken = '';
    // save changes to mongoDB document
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None'  }); // secure: true - only serves on https
    res.sendStatus(204); // all is well, no content to send
}

module.exports = { handleLogout }