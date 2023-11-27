const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // useUnifiedTopology and newUrlParser are deprecated and no longer necessary
        await mongoose.connect(process.env.DATABASE_URI);
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB