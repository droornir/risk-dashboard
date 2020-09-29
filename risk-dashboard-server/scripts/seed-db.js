const fs = require('fs');
const mongoose = require('../lib/db');
const logger = require('../lib/log');
const { RiskData } = require('../api/web-risk/web-risk.model');

async function seed() {
    try {
        // Connect
        await mongoose.connect();

        await RiskData.deleteMany({});
        const data = JSON.parse(fs.readFileSync('./scripts/data.json', 'utf8'));
        await RiskData.insertMany(data);

        // Disconnect
        await mongoose.disconnect();
    } catch (error) {
        logger.error('Error seeding db', error);
    }
}
seed();
