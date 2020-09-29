const fs = require('fs');
const mongoose = require('../lib/db');
const logger = require('../lib/log');
const { RiskData } = require('../api/web-risk/web-risk.model');

const jsonFileName = 'mock-data.json';

/**
 * parse file to db
 */
async function parseJsonFileToDb() {
    // delete collection
    await RiskData.deleteMany({});

    const jsonDataFile = JSON.parse(fs.readFileSync(`./scripts/${jsonFileName}`, 'utf8'));

    await RiskData.insertMany(jsonDataFile);
}

/**
 * init json parser script
 */
async function init() {
    try {
        // Connect to db
        await mongoose.connect();

        // import json file to mongo
        await parseJsonFileToDb();

        // Disconnect form mongo
        await mongoose.disconnect();
    } catch (error) {
        logger.error('Error in seed db', error);
    }
}

init();
