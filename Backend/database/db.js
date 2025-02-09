const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('✅ Connected to database successfully');
    } catch (err) {
        console.error('❌ Database connection error:', err);
    }
}

module.exports = connectToDatabase;
