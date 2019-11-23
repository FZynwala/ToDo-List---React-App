const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://user1:user1@cluster0-38y1r.mongodb.net/test?retryWrites=true&w=majority';

async function connectToDB() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to MongoDB...');
    } catch (err) {
        console.error('Connection failed...', err);
    }
}

module.exports.connectToDB = connectToDB;