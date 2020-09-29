const mongoose = require('mongoose');
const { db } = require('../config/config');

// Connect
async function connect() {
    return mongoose.connect(db.mongo.uri, db.mongo.options)
        .then(conn => {
            // set debug mode
            mongoose.set('debug', db.mongo.debug);
            mongoose.set('useCreateIndex', true);
            return conn;
        });
}

// Disconnect
async function disconnect() {
    return mongoose.disconnect();
}
module.exports = {
    disconnect,
    connect,
};
