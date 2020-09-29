const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const dataRisk = require('../api/web-risk/web-risk.route');

// Init server
module.exports.initServer = () => {
    const server = express();
    server.use(bodyParser.urlencoded({
        extended: true
    }));
    server.use(bodyParser.json());
    // Load routes
    server.use(helmet());
    server.use('/api', dataRisk);

    return server;
};
